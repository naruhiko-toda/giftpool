import { describe, expect, it } from "bun:test";
import { loggerError } from "@/lib/logger";
import prisma from "@/lib/prisma";
import { createProject } from "@actions/createProject";
import { Project } from "@type/project";

describe("createProject", () => {
  it("プロジェクトの作成処理", async () => {
    expect(await prisma.project.count()).toBe(0);
    const formData: FormData = new FormData();
    formData.append("name", "macbook pro");
    formData.append("price", "1000");
    try {
      await createProject(formData);
    } catch (e) {
      loggerError(e);
    }
    expect(await prisma.project.count()).toBe(1);
    const project: Project = (await prisma.project.findFirst()) as Project;
    expect(project.name).toBe("macbook pro");
    expect(project.price).toBe(1000);
  });
});
