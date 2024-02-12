import prisma from "@/lib/prisma";
import { CreateProject, Project } from "@type/project";

export class ProjectRepository {
  async create(project: CreateProject): Promise<Project> {
    return prisma.project.create({
      data: project,
    });
  }

  async find(uuid: string): Promise<Project> {
    return prisma.project.findUnique({ where: { uuid: uuid } });
  }
}
