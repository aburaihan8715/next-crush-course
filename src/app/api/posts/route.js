import { Post } from "@/models/Post";
import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDb();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
