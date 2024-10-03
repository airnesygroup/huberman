require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const path = require('path');

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debug statement

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.category.createMany({

      data: [
        { slug: "general", title: "General", icon: "far fa-circle" },
        { slug: "tech-news", title: "Tech News", icon: "far fa-newspaper" },
        { slug: "artificial-intelligence", title: "Artificial Intelligence", icon: "far fa-robot" },
        { slug: "gaming", title: "Gaming", icon: "far fa-gamepad" },
        { slug: "entertainment", title: "Entertainment", icon: "far fa-film" },
        { slug: "metaverse", title: "Metaverse", icon: "far fa-vr-cardboard" },
        { slug: "blockchain", title: "Blockchain", icon: "far fa-coins" },
        { slug: "virtual-reality", title: "Virtual Reality", icon: "far fa-vr-cardboard" },
        { slug: "augmented-reality", title: "Augmented Reality", icon: "far fa-glasses" },
        { slug: "3d-printing", title: "3D Printing", icon: "far fa-print" },
        { slug: "fintech", title: "FinTech", icon: "far fa-piggy-bank" },
        { slug: "wearable-tech", title: "Wearable Technology", icon: "far fa-watch" },
        { slug: "media-communication", title: "Media & Communication", icon: "far fa-bullhorn" },
        { slug: "e-commerce", title: "E-Commerce", icon: "far fa-shopping-cart" },
        { slug: "machine-learning", title: "Machine Learning", icon: "far fa-brain" },
        { slug: "data-science", title: "Data Science", icon: "far fa-database" },
        { slug: "software", title: "Software", icon: "far fa-code" },
        { slug: "robotics", title: "Robotics", icon: "far fa-robot" },
        { slug: "cloud-computing", title: "Cloud Computing", icon: "far fa-cloud" },
        { slug: "quantum-computing", title: "Quantum Computing", icon: "far fa-atom" },
        { slug: "cybersecurity", title: "Cybersecurity", icon: "far fa-lock" },
        { slug: "internet-of-things", title: "Internet of Things", icon: "far fa-wifi" },
        { slug: "networking", title: "Networking", icon: "far fa-network-wired" },
        { slug: "fashion", title: "Fashion", icon: "far fa-tshirt" },
        { slug: "foodtech", title: "FoodTech", icon: "far fa-utensils" },
        { slug: "electrical-electronics", title: "Electrical & Electronics", icon: "far fa-bolt" },
        { slug: "computers-hardware", title: "Computers & Hardware", icon: "far fa-desktop" },
        { slug: "automotive", title: "Automotive", icon: "far fa-car" },
        { slug: "aerospace", title: "Aerospace", icon: "far fa-rocket" },
        { slug: "energy", title: "Energy", icon: "far fa-battery-half" },
        { slug: "physics", title: "Physics", icon: "far fa-flask" },
        { slug: "mathematics", title: "Mathematics", icon: "far fa-square-root-alt" },
        { slug: "biotech", title: "Biotech", icon: "far fa-dna" },
        { slug: "geospatial", title: "Geospatial", icon: "far fa-map-marked-alt" },
        { slug: "mechanical-industrial", title: "Mechanical & Industrial", icon: "far fa-cogs" },
        { slug: "construction", title: "Construction", icon: "far fa-hammer" },
        { slug: "medtech", title: "MedTech", icon: "far fa-heartbeat" },
        { slug: "agritech", title: "AgriTech", icon: "far fa-seedling" },
        { slug: "envirotech", title: "EnviroTech", icon: "far fa-leaf" },
        { slug: "marine-tech", title: "Marine Technology", icon: "far fa-anchor" },
        { slug: "military-tech", title: "Military Technology", icon: "far fa-fighter-jet" },
        { slug: "logistics", title: "Logistics", icon: "far fa-boxes" },
        { slug: "urban-planning", title: "Urban Planning", icon: "far fa-city" },
        { slug: "hospitality", title: "Hospitality", icon: "far fa-hand-paper" },
        { slug: "textiles", title: "Textile Technology", icon: "far fa-thread" },
        { slug: "sports", title: "Sports Technology", icon: "far fa-football-ball" },
        { slug: "design", title: "Design", icon: "far fa-paint-brush" },
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
