"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div>
      <h2>{error.message}</h2>
      <button type={"button"} onClick={() => reset()}>再レンダリングする</button>
    </div>
  );
}
