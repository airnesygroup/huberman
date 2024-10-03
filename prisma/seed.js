require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const path = require('path');

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debug statement

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.category.createMany({
      data: [
        { slug: "general", title: "General", icon: "fa-regular fa-circle" },
        { slug: "tech-news", title: "Tech News", icon: "fa-regular fa-newspaper" },
        { slug: "artificial-intelligence", title: "Artificial Intelligence", icon: "fa-regular fa-robot" },
        { slug: "gaming", title: "Gaming", icon: "fa-regular fa-gamepad" },
        { slug: "entertainment", title: "Entertainment", icon: "fa-regular fa-film" },
        { slug: "metaverse", title: "Metaverse", icon: "fa-regular fa-vr-cardboard" },
        { slug: "blockchain", title: "Blockchain", icon: "fa-regular fa-coins" },
        { slug: "virtual-reality", title: "Virtual Reality", icon: "fa-regular fa-vr-cardboard" },
        { slug: "augmented-reality", title: "Augmented Reality", icon: "fa-regular fa-glasses" },
        { slug: "3d-printing", title: "3D Printing", icon: "fa-regular fa-print" },
        { slug: "fintech", title: "FinTech", icon: "fa-regular fa-piggy-bank" },
        { slug: "wearable-tech", title: "Wearable Technology", icon: "fa-regular fa-watch" },
        { slug: "media-communication", title: "Media & Communication", icon: "fa-regular fa-bullhorn" },
        { slug: "e-commerce", title: "E-Commerce", icon: "fa-regular fa-shopping-cart" },
        { slug: "machine-learning", title: "Machine Learning", icon: "fa-regular fa-brain" },
        { slug: "data-science", title: "Data Science", icon: "fa-regular fa-database" },
        { slug: "software", title: "Software", icon: "fa-regular fa-code" },
        { slug: "robotics", title: "Robotics", icon: "fa-regular fa-robot" },
        { slug: "cloud-computing", title: "Cloud Computing", icon: "fa-regular fa-cloud" },
        { slug: "quantum-computing", title: "Quantum Computing", icon: "fa-regular fa-atom" },
        { slug: "cybersecurity", title: "Cybersecurity", icon: "fa-regular fa-lock" },
        { slug: "internet-of-things", title: "Internet of Things", icon: "fa-regular fa-wifi" },
        { slug: "networking", title: "Networking", icon: "fa-regular fa-network-wired" },
        { slug: "fashion", title: "Fashion", icon: "fa-regular fa-tshirt" },
        { slug: "foodtech", title: "FoodTech", icon: "fa-regular fa-utensils" },
        { slug: "electrical-electronics", title: "Electrical & Electronics", icon: "fa-regular fa-bolt" },
        { slug: "computers-hardware", title: "Computers & Hardware", icon: "fa-regular fa-desktop" },
        { slug: "automotive", title: "Automotive", icon: "fa-regular fa-car" },
        { slug: "aerospace", title: "Aerospace", icon: "fa-regular fa-rocket" },
        { slug: "energy", title: "Energy", icon: "fa-regular fa-battery-half" },
        { slug: "physics", title: "Physics", icon: "fa-regular fa-flask" },
        { slug: "mathematics", title: "Mathematics", icon: "fa-regular fa-square-root-alt" },
        { slug: "biotech", title: "Biotech", icon: "fa-regular fa-dna" },
        { slug: "geospatial", title: "Geospatial", icon: "fa-regular fa-map-marked-alt" },
        { slug: "mechanical-industrial", title: "Mechanical & Industrial", icon: "fa-regular fa-cogs" },
        { slug: "construction", title: "Construction", icon: "fa-regular fa-hammer" },
        { slug: "medtech", title: "MedTech", icon: "fa-regular fa-heartbeat" },
        { slug: "agritech", title: "AgriTech", icon: "fa-regular fa-seedling" },
        { slug: "envirotech", title: "EnviroTech", icon: "fa-regular fa-leaf" },
        { slug: "marine-tech", title: "Marine Technology", icon: "fa-regular fa-anchor" },
        { slug: "military-tech", title: "Military Technology", icon: "fa-regular fa-fighter-jet" },
        { slug: "supply-chain", title: "Supply Chain", icon: "fa-regular fa-boxes" },
        { slug: "smart-city", title: "Smart City", icon: "fa-regular fa-city" },
        { slug: "hci", title: "Human-Computer Interaction", icon: "fa-regular fa-hand-paper" },
        { slug: "textile-tech", title: "Textile Technology", icon: "fa-regular fa-thread" },
        { slug: "sports-tech", title: "Sports Technology", icon: "fa-regular fa-football-ball" },
        { slug: "digital-art-design", title: "Digital Art & Design", icon: "fa-regular fa-paint-brush" }
      ]
    });
    console.log("Sample categories with icons added to the database.");
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
