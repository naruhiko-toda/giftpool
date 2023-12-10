import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  price: integer("price"),
});

export const projectInsertSchema = createInsertSchema(projects, {
  id: (schema) => schema.id.positive(),
  name: z.string().min(1).max(255),
  price: z
    .string()
    .min(1)
    .refine((val) => !Number.isNaN(parseInt(val, 10))),
});
export type ProjectInsertReqSchema = z.infer<typeof projectInsertSchema>;

export type InsertProject = typeof projects.$inferInsert;
