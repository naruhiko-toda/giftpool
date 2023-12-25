"use server";
import { ProjectRepository } from "@repositories/projectRepository";
import { redirect } from "next/navigation";
import {CreateProject} from "@type/project";


const createProject = async (formData: FormData) => {
  const name = formData.get('name') as string
  let parsedValue = parseInt(formData.get('price') as string, 10);
  const price = !isNaN(parsedValue) ? parsedValue : 0 as number
  let project: CreateProject = {name, price};
  await new ProjectRepository().create(project);
  redirect("/projects");
};
export { createProject };
