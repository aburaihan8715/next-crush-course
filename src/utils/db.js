import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    mongoose.connect(process.env.ATLAS_URI);
    console.log("Db is connected!!");
  } catch (error) {
    throw new Error("Connection failed");
  }
};
