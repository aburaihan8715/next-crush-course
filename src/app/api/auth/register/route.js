import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";

export async function POST(request) {
  const { name, email, password } = await request.json();
  await connectDb();
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created!!", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
}
