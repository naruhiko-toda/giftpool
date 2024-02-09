// @ts-ignore
import { describe, expect, it } from "bun:test";
import { Header } from "@/app/header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("ヘッダー画面が表示されていること", async () => {
    render(await Header());
    expect(screen.getByRole('img', { name: 'giftpool logo' })).toBeTruthy();
    expect(screen.getByText("プロジェクトを登録")).toBeTruthy();
    expect(screen.getByText("ログイン")).toBeTruthy();
  });
});
