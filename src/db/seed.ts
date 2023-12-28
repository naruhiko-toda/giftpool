import { loggerDebug } from "@/lib/logger";
import prisma from "@/lib/prisma";

if (!("DATABASE_URL" in process.env)) throw new Error("DATABASE_URL not found on .env.development");

const main = async () => {
  loggerDebug("start delete");
  await prisma.project.deleteMany({});
  loggerDebug("finish delete");
};

await main().then(async () => {
  process.exit(0);
});
