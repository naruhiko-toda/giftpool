// @ts-ignore
import { describe, expect, it } from "bun:test";
import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import { user } from "./lib/user";

describe("Home", () => {
  it("プロジェクト登録画面が表示されていること", async () => {
    render(await Home());
    expect(screen.getByText("プロジェクトを登録しましょう")).toBeTruthy();
    expect(screen.getByText("プロジェクト名")).toBeTruthy();
    expect(screen.getByText("金額")).toBeTruthy();
    expect(screen.getByText("登録する")).toBeTruthy();
  });
  it("プロジェクトを登録できること", async () => {
    render(await Home());
    await user.click(screen.queryAllByLabelText("プロジェクト名")[0]);
    await user.type(screen.queryAllByPlaceholderText("例）誕生日プレゼント")[0], "MacBookPro");
    await user.click(screen.queryAllByLabelText("金額")[0]);
    await user.type(screen.queryAllByPlaceholderText("金額を入力してください")[0], "100000");
    await user.click(screen.queryAllByText("登録する")[0]);
  });
});
