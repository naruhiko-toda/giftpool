import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  price: integer("price"),
});

export const projectInsertReqSchema = createInsertSchema(projects, {
  name: z.string().min(1).max(255),
  price: z
    .string()
    .min(1)
    .refine((val) => !Number.isNaN(parseInt(val, 10))),
});

type ProjectInsertReqSchema = z.infer<typeof projectInsertReqSchema>;

export const projectInsertResSchema = createSelectSchema(projects).pick({
  name: true,
  price: true,
});

type ProjectInsertReturn = z.infer<typeof projectInsertResSchema>;

type ProjectInsertRes =
  | {
      data: ProjectInsertReturn;
    }
  | {
      validateError?: z.ZodError<ProjectInsertReqSchema>;
      constraintError?: "users_discriminator_unique" | "users_email_unique";
      error?: "internal error";
    };
