import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  price: integer("price"),
});

export const projectInsertSchema = createInsertSchema(projects, {
  name: z.string().min(1).max(255),
  price: z
    .string()
    .min(1)
    .refine((val) => !Number.isNaN(parseInt(val, 10))),
});
