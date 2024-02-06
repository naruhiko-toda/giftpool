"use server";
import { ProjectRepository } from "@repositories/projectRepository";
import * as Sentry from "@sentry/nextjs";
import { CreateProject, Project } from "@type/project";
import { redirect } from "next/navigation";

const createProject = async (formData: FormData) => {
  Sentry.captureMessage("Something went wrong");
  const name = formData.get("name") as string;
  const parsedValue = parseInt(formData.get("price") as string, 10);
  const price = !Number.isNaN(parsedValue) ? parsedValue : (0 as number);
  const createProject: CreateProject = { name, price };
  const project: Project = await new ProjectRepository().create(createProject);
  if (process.env.NODE_ENV !== "test") {
    redirect(`/projects/${project.id}`);
  }
};
export { createProject };
