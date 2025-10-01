import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Early validation for required environment variables
if (!process.env.LOOPS_API_KEY) {
  throw new Error("LOOPS_API_KEY is required but not configured. Please add it to your .env file.");
}

export const env = createEnv({
  server: {
    LOOPS_API_KEY: z.string().min(1, "LOOPS_API_KEY is required"),
  },
  client: {},
  runtimeEnv: {
    LOOPS_API_KEY: process.env.LOOPS_API_KEY,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
