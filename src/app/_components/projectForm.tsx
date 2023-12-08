"use client";
import { Container, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";

export const ProjectForm: () => React.JSX.Element = () => {
  const textFieldRef = useRef(null);

  useEffect(() => {
    textFieldRef.current.focus();
  }, []);
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h1" fontSize={"6vw"}>
          プロジェクトを登録しましょう
        </Typography>
        <TextField
          fullWidth
          label={"プロジェクト名"}
          variant="standard"
          placeholder={"例）誕生日プレゼント"}
          inputRef={textFieldRef}
        />
        <TextField
          fullWidth
          label={"金額"}
          variant="standard"
          placeholder={"金額を入力してください"}
          InputProps={{
            startAdornment: <InputAdornment position="start">￥</InputAdornment>,
          }}
        />
      </Container>
    </>
  );
};
