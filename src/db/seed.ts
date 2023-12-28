import prisma from "@/lib/prisma";

if (!("DATABASE_URL" in process.env)) throw new Error("DATABASE_URL not found on .env.development");

const main = async () => {
  console.log("start delete")
  await prisma.project.deleteMany({});
  console.log("finish delete")
};

await main().then(async () => {
  process.exit(0);
});
