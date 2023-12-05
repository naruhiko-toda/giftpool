// @ts-ignore
import { describe, expect, it } from "bun:test";
import PostNew from "@/app/post/new/page";
import { render, screen } from "@testing-library/react";
import { user } from "../lib/user";

describe("New", () => {
  it("投稿画面が表示されていること", async () => {
    render(await PostNew());
    expect(screen.getByText("投稿画面")).toBeTruthy();
  });
  it("投稿画面で今の気持ちを入力できること", async () => {
    render(await PostNew());
    expect(screen.getAllByPlaceholderText("今の気持ちを伝えましょう")).toBeTruthy();
    const textField = screen.getAllByPlaceholderText("今の気持ちを伝えましょう")[0];
    await user.type(textField, "副業を始めました");
    expect(screen.getByDisplayValue("副業を始めました")).toBeTruthy();
  });
});
