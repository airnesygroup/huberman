require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const path = require('path');

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debug statement

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.category.createMany({
      data: [
        { slug: "well-being", title: "well-being", img: "/style.png" },
        { slug: "nutrition", title: "nutrition", img: "/fashion.png" },
        { slug: "fitness", title: "fitness", img: "/food.png" },
        { slug: "mental", title: "mental", img: "/travel.png" },
        { slug: "sleep", title: "sleep", img: "/culture.png" },
        { slug: "neurobiology", title: "neurobiology", img: "/coding.png" },
        { slug: "supplements", title: "supplements", img: "/style.png" },
        { slug: "addiction", title: "addiction", img: "/fashion.png" },
        { slug: "fertility", title: "fertility", img: "/food.png" },
        { slug: "productivity", title: "productivity", img: "/travel.png" },
        { slug: "hormones", title: "hormones", img: "/culture.png" },
        { slug: "memory", title: "memory", img: "/coding.png" }
      ],
    });
    console.log("Sample categories added to the database.");
  } catch (error) {
    console.error("Error seeding categories:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
