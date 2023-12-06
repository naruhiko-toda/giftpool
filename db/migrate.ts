import { migrate } from "drizzle-orm/mysql2/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

async function main() {
  const migrationsClient = postgres(process.env.DATABASE_URL, {
    max: 1,
  });
  const db = drizzle(migrationsClient);
  await migrate(db, { migrationsFolder: "./drizzle" });
}

try {
  await main();
} catch (e) {
  console.log(e);
} finally {
  process.exit(0);
}
