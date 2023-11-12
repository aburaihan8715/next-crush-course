import React from "react";
import BlogItem from "./BlogItem";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });
  if (!res.ok) {
    // throw new Error("Failed to fetch data"); or
    notFound();
  }
  return res.json();
}

const BlogList = async () => {
  const data = await getData();
  // console.log(data);
  return (
    <ul className="flex flex-col gap-10 my-4">
      {data.map((item) => (
        <BlogItem key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default BlogList;
