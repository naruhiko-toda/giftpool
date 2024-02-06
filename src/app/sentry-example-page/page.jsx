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

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Get started by sending us a sample error:</p>
        <button
          type="button"
          style={{
            padding: "12px",
            cursor: "pointer",
            backgroundColor: "#AD6CAA",
            borderRadius: "4px",
            border: "none",
            color: "white",
            fontSize: "14px",
            margin: "18px",
          }}
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
      </main>
    </div>
  );
}
