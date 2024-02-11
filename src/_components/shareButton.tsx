"use client";

import { loggerError, loggerInfo } from "@/lib/logger";
import { ShareModal } from "@components/shareModal";
import ShareIcon from "@mui/icons-material/Share";
import { Button } from "@mui/material";
import React from "react";

export const ShareButton = () => {
  let title: string;
  let shareUrl: string;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  if (process.browser) {
    title = document.title;
    shareUrl = document.location.href;
  }

  return (
    <>
      <Button
        variant="outlined"
        onClick={async () => {
          if (navigator.share) {
            try {
              loggerInfo(`click share button: ${title} ${shareUrl}`);
              await navigator.share({ title: title, url: shareUrl });
            } catch (e) {
              if (e.toString().includes("AbortError")) {
                loggerError(e);
              } else {
                throw new Error(e);
              }
            }
          } else {
            handleOpen();
          }
        }}
      >
        シェア
        <ShareIcon />
      </Button>

      <ShareModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        shareUrl={shareUrl}
        title={title}
      />
    </>
  );
};
