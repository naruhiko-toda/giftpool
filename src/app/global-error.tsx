"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { loggerError } from "@/lib/logger";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    loggerError(error.toString());
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang={"ja"}>
      <body>
        <h2>Something went wrong!</h2>
        <button type="button" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
