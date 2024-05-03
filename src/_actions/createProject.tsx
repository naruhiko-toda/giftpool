"use server";
import { ProjectRepository } from "@repositories/projectRepository";
import { InsertProject, Project } from "@type/database";
import { redirect } from "next/navigation";

const createProject = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const parsedValue = parseInt(formData.get("price") as string, 10);
  const price = !Number.isNaN(parsedValue) ? parsedValue : (0 as number);
  const insertProject: InsertProject = { name, price };
  const project: Project = await new ProjectRepository().create(insertProject);
  if (process.env.NODE_ENV !== "test") {
    redirect(`/projects/${project.id}`);
  }
};
export { createProject };
