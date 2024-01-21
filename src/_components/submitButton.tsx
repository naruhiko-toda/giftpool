import { Button } from "@mui/material";
import React from "react";
import { useFormStatus } from "react-dom";

export const SubmitButton = (props: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button type={"submit"} variant="contained" disabled={pending}>
      {pending ? "送信中..." : props.text}
    </Button>
  );
};
