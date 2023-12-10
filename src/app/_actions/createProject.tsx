"use server";
import { InsertProject } from "@db/schema";
import { ProjectRepository } from "@repositories/projectRepository";
import { redirect } from "next/navigation";

const createProject = async (formData: FormData) => {
  const name: string = formData.get("name");
  const price: number = formData.get("price");
  const newProject: InsertProject = {
    name: name,
    price: price,
  };

  await new ProjectRepository().create(newProject);
  redirect("/projects");
};
export { createProject };
