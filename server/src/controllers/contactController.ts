import type { Request, Response } from "express";
import { processContactSubmission, validateContactPayload } from "../services/contactService.js";

export async function submitContact(req: Request, res: Response) {
  const result = validateContactPayload(req.body);

  if (!result.valid) {
    return res.status(400).json({ ok: false, message: result.errors.join(" ") });
  }

  await processContactSubmission(result.data);

  return res.status(200).json({ ok: true, message: "Message received." });
}
