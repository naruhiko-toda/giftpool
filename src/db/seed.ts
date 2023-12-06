import { db } from "./database";
import { InsertPost, posts } from "./schema";

if (!("DATABASE_URL" in process.env)) throw new Error("DATABASE_URL not found on .env.development");

const main = async () => {
  await db.delete(posts);
  const newTodo: InsertPost = {
    body: "起業しようか迷っています。",
  };
  await db.insert(posts).values(newTodo);
};

await main().then(async () => {
  process.exit(0);
});
