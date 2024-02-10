"use client";

import { Button } from "@mui/material";

export const ShareButton = () => {
  return (
    <Button
      variant="outlined"
      onClick={async () => {
        await navigator.share({ title: document.title, url: document.location.href });
      }}
    >
      友達にシェア
    </Button>
  );
};