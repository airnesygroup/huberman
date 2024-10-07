import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Function to get random shuffled array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5000000);
};

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 1000;

  // Get the current time
  const now = new Date();

  try {
    const allPosts = [];
    let currentTime = now;
    let periodIndex = 0;

    while (periodIndex < 5000000) { // Fetch posts from 5 days worth of 24-hour periods (adjust as needed)
      // Calculate the time range for the current 24-hour period
      const endTime = currentTime;
      const startTime = new Date(currentTime.getTime() - 24 * 60 * 60 * 1000);

      // Fetch posts for this 24-hour period
      const posts = await prisma.post.findMany({
        take: POST_PER_PAGE,
        where: {
          ...(cat && { catSlug: cat }),
          createdAt: {
            gte: startTime,
            lt: endTime,
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

      // Add the shuffled posts to the overall post list
      allPosts.push(...shuffledPosts);

      // Move to the previous 24-hour period
      currentTime = startTime;
      periodIndex++;
    }

    console.log("All Posts:", allPosts);

    return new NextResponse(JSON.stringify({ posts: allPosts, count: allPosts.length }), { status: 200 });
  } catch (err) {
    console.error("Error fetching posts:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

