import { loggerDebug, loggerError, loggerInfo, loggerWarn } from "../../../lib/logger";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  loggerDebug("server debug");
  loggerDebug(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
  loggerInfo("server info");
  loggerInfo(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
  loggerWarn("server warn");
  loggerWarn(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
  loggerError("server warn");
  loggerError(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
  throw new Error("Sentry Example API Route Error");
}
