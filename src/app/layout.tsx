import React from "react";

import { Header } from "@/app/header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Head from "./head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
