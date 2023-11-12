import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ item }) => {
  // console.log(item);
  return (
    <li className="">
      <Link className="flex gap-10 items-center" href={`/blog/${item._id}`}>
        <div className="w-80 h-40">
          <div className="relative w-full h-full">
            <Image className="object-cover" fill={true} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" src={item.image} alt="banner image" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </Link>
    </li>
  );
};

export default BlogItem;
