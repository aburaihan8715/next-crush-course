import { Post } from "@/models/Post";
import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectDb();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await connectDb();
    await Post.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted!!", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
