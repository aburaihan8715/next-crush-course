import React from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  return (
    <ul className="flex flex-col gap-10 my-4">
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </ul>
  );
};

export default BlogList;
