import React from "react";

import { Header } from "@/app/header";
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
