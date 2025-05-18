import prisma from "../db/prisma";

async function main() {
  const startBase = 100000;
  const range = 100000;
  const rows = 5;

  for (let i = 0; i < rows; i++) {
    const start = startBase + i * range;
    const end = start + range;
    const current = start;

    await prisma.urlTicket.create({
      data: {
        start,
        end,
        current,
      },
    });

    console.log(`inserted ${start} to ${end}, current = ${current}`);
  }
}

main()
  .then(() => {
    console.log("seeding successful");
    return prisma.$disconnect();
  })
  .catch((err) => {
    console.error("error while seeding tickets");
    return prisma.$disconnect();
  });
