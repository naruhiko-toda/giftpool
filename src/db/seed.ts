import { loggerError } from "@/lib/logger";
import prisma from "@/lib/prisma";

if (!("DATABASE_URL" in process.env)) throw new Error("DATABASE_URL not found on .env.development");

const main = async () => {
  await prisma.project.deleteMany({});
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      email: "test@test.com",
      name: "testuser",
      password: await Bun.password.hash("password"),
    },
  });
};

await main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (e) => {
    loggerError(e);
    await prisma.$disconnect();
    process.exit(1);
  });
