// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { loggerDebug, loggerError, loggerInfo, loggerWarn } from "@/lib/logger";
import * as Sentry from "@sentry/nextjs";
loggerDebug("client debug");
loggerDebug(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
loggerInfo("client info");
loggerInfo(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
loggerWarn("client warn");
loggerWarn(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
loggerError("client warn");
loggerError(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);

Sentry.init({
  dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,

  tracesSampleRate: 1,

  debug: false,

  replaysOnErrorSampleRate: 1.0,

  replaysSessionSampleRate: 1.0,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
