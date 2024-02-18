import { SignInButton } from "@components/signInButton";
import { AppBar, Box, Button } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";
import React from "react";

export const Header = () => (
  <AppBar color="transparent" position="static" style={{ marginBottom: "20px" }}>
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href={"/"}>
          <img
            width={"80%"}
            src="/favicons/logo_main.png"
            alt="giftpool logo"
            aria-label={"giftpool logo"}
          />
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="text">
            <Link style={{ textDecoration: "none", color: "black" }} href={"/"}>
              プロジェクトを登録
            </Link>
          </Button>
          <SignInButton />
        </Box>
      </Box>
    </Container>
  </AppBar>
);
