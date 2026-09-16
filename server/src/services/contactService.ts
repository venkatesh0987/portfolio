import { Resend } from "resend";

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const MESSAGE_MAX_LENGTH = 2000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ValidationResult =
  | { valid: true; data: ContactPayload }
  | { valid: false; errors: string[] };

export function validateContactPayload(body: unknown): ValidationResult {
  const errors: string[] = [];

  if (typeof body !== "object" || body === null) {
    return { valid: false, errors: ["Invalid request body."] };
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) errors.push("Name is required.");
  if (typeof email !== "string" || !email.trim()) {
    errors.push("Email is required.");
  } else if (!emailPattern.test(email.trim())) {
    errors.push("A valid email address is required.");
  }
  if (typeof subject !== "string" || !subject.trim()) errors.push("Subject is required.");
  if (typeof message !== "string" || !message.trim()) {
    errors.push("Message is required.");
  } else if (message.length > MESSAGE_MAX_LENGTH) {
    errors.push(`Message must be under ${MESSAGE_MAX_LENGTH} characters.`);
  }

  if (errors.length > 0) return { valid: false, errors };

  return {
    valid: true,
    data: {
      name: (name as string).trim(),
      email: (email as string).trim(),
      subject: (subject as string).trim(),
      message: (message as string).trim(),
    },
  };
}

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

/**
 * Processes a validated contact submission and emails it via Resend.
 *
 * Falls back to logging only when RESEND_API_KEY / CONTACT_TO_EMAIL aren't
 * set, so the endpoint keeps working before email delivery is configured.
 */
export async function processContactSubmission(payload: ContactPayload): Promise<void> {
  console.info(`Contact form submission received from ${payload.email} — subject: "${payload.subject}"`);

  if (!resend || !contactToEmail) {
    console.warn("Email delivery is not configured (RESEND_API_KEY / CONTACT_TO_EMAIL) — submission was only logged.");
    return;
  }

  const { error } = await resend.emails.send({
    from: `Portfolio Contact Form <${contactFromEmail}>`,
    to: contactToEmail,
    replyTo: payload.email,
    subject: `[Portfolio Contact] ${payload.subject}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
  });

  if (error) {
    console.error("Resend failed to deliver contact submission:", error);
    throw new Error("Failed to send the message. Please try again or email me directly.");
  }
}
