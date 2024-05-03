import { supabase } from "@/lib/supabase";
import type { InsertProject, Project } from "@type/database";

export class ProjectRepository {
  async create(project: InsertProject): Promise<Project> {
    const { data, error } = await supabase.from("Project").insert(project).select();
    if (error) {
      console.error(error);
    }
    return data[0];
  }

  async find(id: string): Promise<Project> {
    const { data, error } = await supabase.from("Project").select("*").eq("id", id);
    if (error) {
      console.error(error);
    }
    return data[0];
  }
}
