"use server";
import { projectInsertReqSchema } from "@db/schema";
import { ProjectRepository } from "@repositories/projectRepository";
import { redirect } from "next/navigation";

const createProject = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const insertProjectResult = projectInsertReqSchema.safeParse(data);
  if (insertProjectResult.success) {
    await new ProjectRepository().create(insertProjectResult.data);
    redirect("/projects");
  }
};
export { createProject };
