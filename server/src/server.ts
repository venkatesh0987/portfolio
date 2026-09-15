import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { healthRouter } from "./routes/health.js";
import { contactRouter } from "./routes/contact.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

const app = express();

const PORT = Number(process.env.PORT) || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN ?? "http://localhost:5173";

app.use(helmet());
app.use(
  cors({
    origin: CLIENT_ORIGIN.split(",").map((origin) => origin.trim()),
  }),
);
app.use(express.json({ limit: "10kb" }));

app.use("/api/health", healthRouter);
app.use("/api/contact", contactRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
