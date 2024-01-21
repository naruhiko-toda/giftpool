import { describe, expect, it } from "bun:test";
import prisma from "@/lib/prisma";
import { createProject } from "@actions/createProject";
import { Project } from "@type/project";

describe("createProject", () => {
  it("プロジェクトの作成処理", async () => {
    await prisma.project.deleteMany({});
    expect(await prisma.project.count()).toBe(0);

    const formData: FormData = new FormData();
    formData.append("name", "macbook pro");
    formData.append("price", "1000");
    await createProject(formData);
    expect(await prisma.project.count()).toBe(1);
    const project: Project = (await prisma.project.findFirst()) as Project;
    expect(project.name).toBe("macbook pro");
    expect(project.price).toBe(1000);
  });
});
