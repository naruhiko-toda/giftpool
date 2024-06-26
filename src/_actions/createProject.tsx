"use server";
import { ProjectRepository } from "@repositories/projectRepository";
import type { InsertProject, Project } from "@type/database";
import { redirect } from "next/navigation";

const createProject = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const parsedValue = Number.parseInt(formData.get("price") as string, 10);
  const price = Number.isNaN(parsedValue) ? (0 as number) : parsedValue;
  const insertProject: InsertProject = { name, price };
  const project: Project = await new ProjectRepository().create(insertProject);
  if (process.env.NODE_ENV !== "test") {
    redirect(`/projects/${project.id}`);
  }
};
export { createProject };
