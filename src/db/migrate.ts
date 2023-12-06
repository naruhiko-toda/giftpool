import { db } from "@db/database";
import { migrate } from "drizzle-orm/mysql2/migrator";

async function main() {
  await migrate(db, { migrationsFolder: "./drizzle" });
}

try {
  await main();
} catch (e) {
  console.log(e);
} finally {
  process.exit(0);
}
