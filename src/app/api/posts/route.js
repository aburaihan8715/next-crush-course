import { Post } from "@/models/Post";
import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";

// get all data or data by username
export async function GET(request) {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connectDb();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
}

export async function POST(request) {
  const body = await request.json();
  const newPost = new Post(body);
  try {
    await connectDb();
    await newPost.save();
    return new NextResponse("Post has been created!", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
