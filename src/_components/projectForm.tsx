"use client";
import { InputAdornment, TextField } from "@mui/material";
import type React from "react";
import { useEffect, useRef } from "react";

import { createProject } from "@actions/createProject";
import { SubmitButton } from "@components/submitButton";

export const ProjectForm: () => React.JSX.Element = () => {
  const textFieldRef = useRef(null);

  useEffect(() => {
    textFieldRef.current.focus();
  }, []);
  return (
    <form action={createProject}>
      <TextField
        fullWidth={true}
        id={"name"}
        name="name"
        label={"プロジェクト名"}
        variant="standard"
        placeholder={"例）誕生日プレゼント"}
        inputRef={textFieldRef}
      />
      <TextField
        fullWidth={true}
        type={"number"}
        id={"price"}
        name={"price"}
        label={"金額"}
        variant="standard"
        placeholder={"金額を入力してください"}
        InputProps={{
          startAdornment: <InputAdornment position="start">￥</InputAdornment>,
          inputMode: "numeric",
        }}
      />
      <SubmitButton text={"登録する"} />
    </form>
  );
};
