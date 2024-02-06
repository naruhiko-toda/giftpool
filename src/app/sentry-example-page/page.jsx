"use client";

import * as Sentry from "@sentry/nextjs";
import Head from "next/head";
import { loggerDebug, loggerError, loggerInfo, loggerWarn } from "../../lib/logger";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Sentry Onboarding</title>
        <meta name="description" content="Test Sentry for your Next.js app!" />
      </Head>

      <main>
        <p>Get started by sending us a sample error:</p>
        <button
          type="button"
          onClick={() => {
            Sentry.startSpan(
              {
                name: "Example Frontend Span",
                op: "test",
              },
              async () => {
                const res = await fetch("/api/sentry-example-api");
                if (!res.ok) {
                  loggerDebug("client debug");
                  loggerDebug(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
                  loggerInfo("client info");
                  loggerInfo(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
                  loggerWarn("client warn");
                  loggerWarn(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
                  loggerError("client warn");
                  loggerError(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);
                  throw new Error("Sentry Example Frontend Error");
                }
              },
            );
          }}
        >
          Throw error!
        </button>
        <button
          type="button"
          onClick={() => {
            loggerWarn("click sentry button!!");
            // Sentry.init({
            //   dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
            //   tracesSampleRate: 1,
            //   debug: false,
            // });
            Sentry.captureException(new Error("frontend direct capture"));
            loggerWarn("done click sentry button!!");
          }}
        >
          Throw sentry!
        </button>
      </main>
    </div>
  );
}
