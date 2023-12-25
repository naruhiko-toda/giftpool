import prisma from "@/lib/prisma";
import {CreateProject} from "@type/project";

export class ProjectRepository {
  async create(project: CreateProject) {
    await prisma.project.create({
      data: project
    });
  }
}
