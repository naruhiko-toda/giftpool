import prisma from "@/lib/prisma";
import { CreateProject, Project } from "@type/project";

export class ProjectRepository {
  async create(project: CreateProject): Promise<Project> {
    return prisma.project.create({
      data: project,
    });
  }

  async find(id: string): Promise<Project> {
    return prisma.project.findUnique({where: {id: id}});
  }
}
