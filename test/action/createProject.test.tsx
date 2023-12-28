import { describe, expect, it } from "bun:test";
import { createProject } from "@actions/createProject";
import prisma from "@/lib/prisma";
import { Project } from "@type/project";

describe("createProject", () => {
  it("プロジェクトの作成処理", async () => {
    expect(await prisma.project.count()).toBe(0)
    let formData: FormData = new FormData()
    formData.append("name", "macbook pro")
    formData.append("price", 1000)
    try {
      await createProject(formData);
    } catch (e) {
      await Bun.write(Bun.stdout, e);
    }
    expect(await prisma.project.count()).toBe(1)
    let project: Project = await prisma.project.findFirst() as Project;
    expect(project.name).toBe("macbook pro")
    expect(project.price).toBe(1000)
  })
})
