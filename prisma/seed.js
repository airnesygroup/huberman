require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const path = require('path');

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debug statement

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.category.createMany({
      data: [
        { slug: "general", title: "General", img: "/General.png" },
        { slug: "tech-news", title: "Tech News", img: "/technews.png" },
        { slug: "gaming", title: "Gaming", img: "/gaming.png" },
        { slug: "streaming", title: "Streaming", img: "/streaming.png" },
        { slug: "3d-printing", title: "3D Printing", img: "/3d-printing.png" },
        { slug: "blockchain", title: "Blockchain", img: "/blockchain.png" },
        { slug: "mathematics", title: "Mathematics", img: "/mathematics.png" },
        { slug: "biochemistry", title: "Biochemistry", img: "/biochemistry.png" },
        { slug: "genetics", title: "Genetics", img: "/genetics.png" },
        { slug: "aerospace", title: "Aerospace ", img: "/aerospace.png" },
        { slug: "biology", title: "Biology & Life Sciences", img: "/biology.png" },
        { slug: "physics", title: "Physics", img: "/physics.png" },
        { slug: "chemistry", title: "Chemistry", img: "/chemistry.png" },
        { slug: "vr-ar", title: "VR & AR", img: "/vr-ar.png" },
        { slug: "fintech", title: "Fintech", img: "/fintech.png" },
        { slug: "programing", title: "Programing", img: "/programing.png" },
        { slug: "software-apps", title: "Software & Apps", img: "/software-apps.png" },
        { slug: "vehicles", title: "Vehicles", img: "/vehicles.png" },
        { slug: "ux-design", title: "UX Design", img: "/ux-design.png" },
        { slug: "animation", title: "Animation", img: "/animation.png" },
        { slug: "economics", title: "Economics", img: "/economics.png" },

          { slug: "computers-hardware", title: "Computers & Hardware", img: "/computers-hardware.png" },
          { slug: "robotics-ai", title: "Robotics & AI", img: "/ai.png" },
          { slug: "web-development", title: "Web Development", img: "/web-development.png" },
          { slug: "network-cloud", title: "Network & Cloud", img: "/network-engineering.png" },
          { slug: "mechanical-engineering", title: "Mechanical Engineering", img: "/mechanical-engineering.png" },
          { slug: "electrical-engineering", title: "Electrical Engineering", img: "/electrical-engineering.png" },
          { slug: "civil-engineering", title: "Civil Engineering", img: "/civil-engineering.png" },
          { slug: "chemical-engineering", title: "Chemical Engineering", img: "/chemical-engineering.png" },
          { slug: "biomedical-engineering", title: "Biomedical Engineering", img: "/biomedical-engineering.png" },
          { slug: "industrial", title: "Industrial ", img: "/industrial.png" },
          { slug: "data-science", title: "Data Science", img: "/data-science.png" },
          { slug: "cybersecurity", title: "Cybersecurity", img: "/cybersecurity.png" },
          { slug: "computer-science", title: "Computer Science", img: "/computer-science.png" },
          { slug: "information-technology", title: "Information Technology", img: "/information-technology.png" },
          { slug: "actuarial-science", title: "Actuarial Science", img: "/actuarial-science.png" },
          { slug: "earth-environmental-science", title: "Earth & Environmental Science", img: "/earth-science.png" },
          { slug: "astronomy", title: "Astronomy", img: "/astronomy.png" },
          { slug: "materials-science", title: "Materials Science", img: "/materials-science.png" },
          { slug: "psychology", title: "Psychology", img: "/psychology.png" },
          { slug: "sociology-anthropology", title: "Sociology & Anthropology", img: "/sociology.png" },
      
      
       
      ]
      
      
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
