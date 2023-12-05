import { pgTable, serial, text } from 'drizzle-orm/pg-core'
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  body: text('body', { length: 256 }),
})

export type InsertPost = typeof posts.$inferInsert
