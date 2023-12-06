import { pgTable, serial, text } from "drizzle-orm/pg-core";
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  body: text("body"),
});

export type InsertPost = typeof posts.$inferInsert;
