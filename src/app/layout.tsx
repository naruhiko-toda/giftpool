import React from "react";

import NextAuthProvider from "@/_providers/NextAuth";
import { Header } from "@/app/header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "./head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <Head />
      <body>
        <Header />
        <ToastContainer autoClose={2000} />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
