import type { Request, Response } from "express";
import { processContactSubmission, validateContactPayload } from "../services/contactService.js";

export async function submitContact(req: Request, res: Response) {
  const result = validateContactPayload(req.body);

  if (!result.valid) {
    return res.status(400).json({ ok: false, message: result.errors.join(" ") });
  }

  try {
    await processContactSubmission(result.data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send the message.";
    return res.status(502).json({ ok: false, message });
  }

  return res.status(200).json({ ok: true, message: "Message received." });
}
