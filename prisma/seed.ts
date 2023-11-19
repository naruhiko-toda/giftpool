import prisma from "../lib/prisma";
async function main() {
  await prisma.lesson.deleteMany({});
  await prisma.lesson.create({
    data: {
      title: "コーチングレッスン",
      time: 90,
      price: 6000,
      path: "coaching.png",
      name: "coaching",
    }
  })
  await prisma.lesson.create({
    data: {
      title: "ES添削レッスン",
      time: 60,
      price: 5000,
      path: "entry_sheet.png",
      name: "entrySheet",
    }
  })
}

await main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })