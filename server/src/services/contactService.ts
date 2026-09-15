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

/**
 * Processes a validated contact submission.
 *
 * No email provider is configured for Version 1 — the submission is validated
 * and logged only. To send real notifications, integrate a provider here
 * (e.g. Resend, Postmark, SendGrid, or SMTP via Nodemailer) using credentials
 * supplied through environment variables (never hardcoded).
 */
export async function processContactSubmission(payload: ContactPayload): Promise<void> {
  console.info(`Contact form submission received from ${payload.email} — subject: "${payload.subject}"`);
}
