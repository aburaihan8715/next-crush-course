import React from "react";
import BlogItem from "./BlogItem";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "force-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const BlogList = async () => {
  const data = await getData();
  // console.log(data);
  return (
    <ul className="flex flex-col gap-10 my-4">
      {data.map((item) => (
        <BlogItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default BlogList;
