// @ts-ignore
import { describe, expect, it } from "bun:test";
import ProjectPage from "@/app/projects/[id]/page";
import prisma from "@/lib/prisma";
import { render, screen } from "@testing-library/react";

describe("Project", () => {
  it("プロジェクトが表示されていること", async () => {
    await prisma.project.create({data: {id: 10, name: "MacbookPro", price: 10000}})
    render(await ProjectPage({params: {id: "10"}}));
    expect(screen.getByText("欲しいもの:")).toBeTruthy();
    expect(screen.getByText("MacbookPro")).toBeTruthy();
    expect(screen.getByText("目標金額")).toBeTruthy();
    expect(screen.getByText("10000")).toBeTruthy();
  });
});
