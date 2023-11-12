import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ item }) => {
  return (
    <li className="">
      <Link className="flex gap-10 items-center" href={`/blog/${item.id}`}>
        <div className="w-80 h-40">
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              fill={true}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
              alt="banner image"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
          <p>{item.body}</p>
        </div>
      </Link>
    </li>
  );
};

export default BlogItem;
