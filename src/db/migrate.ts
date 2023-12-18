import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL, { max: 1, onnotice: () => {} });
const db = drizzle(sql);
await migrate(db, { migrationsFolder: "./drizzle" })
    .then(() => {
      console.info("Migration complete")
    })
    .catch((error) => {
      console.error("Migration failed", error)
      process.exit(1)
    })
    .finally(async () => {
      await sql.end()
      console.info("Connection closed")
      process.exit(0)
    })
