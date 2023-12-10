import { loggerInfo } from "@/lib/logger";
import { Logger } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

class DrizzleLogger implements Logger {
  logQuery(query: string, params: unknown[]): void {
    loggerInfo({ query, params });
  }
}

const queryClient = postgres(process.env.DATABASE_URL);
export const db = drizzle(queryClient, { logger: new DrizzleLogger() });
