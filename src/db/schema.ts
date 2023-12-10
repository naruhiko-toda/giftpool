import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  price: integer("price"),
});

export type InsertProject = typeof projects.$inferInsert;
