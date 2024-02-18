"use client";
import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const SignInButton = () => {
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <Button onClick={() => signIn("line")} variant="contained">
          ログイン
        </Button>
      )}
      {session && (
        <Button onClick={() => signOut()} variant="contained">
          ログアウト
        </Button>
      )}
    </>
  );
};
