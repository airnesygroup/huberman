



import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Function to get random shuffled array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  // Get the bunchIndex from the query parameters (defaults to 0)
  const bunchIndex = parseInt(searchParams.get("bunchIndex") || "0", 10);

  const POST_PER_PAGE = 1000;

  // Calculate the time range for the requested bunch (24-hour period)
  const now = new Date();
  const endTime = new Date(now.getTime() - bunchIndex * 24 * 60 * 60 * 1000);
  const startTime = new Date(endTime.getTime() - 24 * 60 * 60 * 1000);

  console.log(`Fetching posts from ${startTime.toISOString()} to ${endTime.toISOString()}`);

  try {
    // Fetch posts for this 24-hour period
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      where: {
        ...(cat && { catSlug: cat }),
        createdAt: {
          gte: startTime,
          lt: endTime, // Ensure posts are from this exact 24-hour period
        },
      },
      include: {
        user: true, // Include user details
      },
      orderBy: {
        createdAt: "desc", // Fetch posts ordered by latest first
      },
    });

    // Shuffle the posts within this 24-hour period
    const shuffledPosts = shuffleArray(posts);

    return new NextResponse(JSON.stringify({ posts: shuffledPosts, count: shuffledPosts.length }), { status: 200 });
  } catch (err) {
    console.error("Error fetching posts:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};


 

