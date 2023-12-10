import { db } from "@db/database";
import { projects } from "@db/schema";
import { Project } from "@type/project";

export class ProjectRepository {
  async create(project) {
    await db.insert(projects).values(project);
  }
}
