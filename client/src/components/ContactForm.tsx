import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const MESSAGE_MAX_LENGTH = 2000;

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.length > MESSAGE_MAX_LENGTH) {
    errors.message = `Message must be under ${MESSAGE_MAX_LENGTH} characters.`;
  }

  return errors;
}

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setStatusMessage("Thanks for reaching out — I'll get back to you soon.");
      setValues(initialState);
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  const fieldClasses =
    "w-full rounded-lg border border-ink/15 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:border-accent dark:border-paper/15 dark:text-paper dark:placeholder:text-paper/40";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80 dark:text-paper/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClasses}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink/80 dark:text-paper/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClasses}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink/80 dark:text-paper/80">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange("subject")}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClasses}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-red-500">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/80 dark:text-paper/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={MESSAGE_MAX_LENGTH}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClasses} resize-none`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity duration-200 hover:opacity-90 disabled:opacity-60 dark:bg-paper dark:text-ink"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <div role="status" aria-live="polite">
        {statusMessage && (
          <p className={`text-sm ${status === "success" ? "text-accent" : "text-red-500"}`}>{statusMessage}</p>
        )}
      </div>
    </form>
  );
}
