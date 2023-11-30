import prisma from '@/lib/prisma'
async function main() {
  await prisma.post.deleteMany({})
  await prisma.post.create({
    data: {
      body: '起業しようか迷っています。',
    },
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
