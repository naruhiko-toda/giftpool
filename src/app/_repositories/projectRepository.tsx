import { db } from "@db/database";
import { InsertProject, projects } from "@db/schema";

export class ProjectRepository {
  async create(project: InsertProject) {
    await db.insert(projects).values(project);
  }
}
