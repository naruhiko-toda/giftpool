// @ts-ignore
import { describe, expect, it } from "bun:test";
import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("プロジェクト登録画面が表示されていること", async () => {
    render(await Home());
    expect(screen.getByText("プロジェクトを登録しましょう")).toBeTruthy();
    expect(screen.getByText("プロジェクト名")).toBeTruthy();
    expect(screen.getByText("金額")).toBeTruthy();
  });
});
