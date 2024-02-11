// @ts-ignore
import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import ProjectPage from "@/app/projects/[id]/page";
import prisma from "@/lib/prisma";
import { cleanup, render, screen } from "@testing-library/react";
import { user } from "./lib/user";
import { MockNavigator } from "./mock/mockNavigator";

beforeEach(async () => {
  await prisma.project.deleteMany({});
  await prisma.project.create({ data: { id: 10, name: "MacbookPro", price: 10000 } });
});
afterEach(cleanup);

describe("Project", () => {
  it("プロジェクトが表示されていること", async () => {
    render(await ProjectPage({ params: { id: "10" } }));
    expect(screen.getByText("欲しいもの:")).toBeTruthy();
    expect(screen.getByText("MacbookPro")).toBeTruthy();
    expect(screen.getByText("目標金額")).toBeTruthy();
    expect(screen.getByText("10000")).toBeTruthy();
  });
  it("プロジェクトをシェアできること_navigatorがない場合", async () => {
    render(await ProjectPage({ params: { id: "10" } }));
    expect(screen.getByRole("button", { name: "シェア" })).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "シェア" }));
    expect(screen.getByText("あなたの欲しいものを友達に知らせよう")).toBeTruthy();
  });
  it("プロジェクトをシェアできること_navigatorがある場合", async () => {
    const mockNavigator = new MockNavigator();
    Object.defineProperty(navigator, "share", {
      value: mockNavigator.share.bind(mockNavigator),
    });

    render(await ProjectPage({ params: { id: "10" } }));
    expect(screen.getByRole("button", { name: "シェア" })).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "シェア" }));
    expect(mockNavigator.shareCallCount).toBe(1);
    expect(Object.keys(mockNavigator.shareCallParams)).toEqual(["title", "url"]);
  });
});
