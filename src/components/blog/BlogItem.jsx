import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = () => {
  return (
    <li className="">
      <Link className="flex gap-10 items-center" href={`/blog/123`}>
        <div className="w-80 h-40">
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              fill={true}
              src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
              alt="banner image"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-2xl mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur .</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem voluptates accusamus facilis enim quas repellat aut ad a? Voluptas illum,
            inventore consequuntur quia cupiditate alias excepturi cum molestias maiores repellendus?
          </p>
        </div>
      </Link>
    </li>
  );
};

export default BlogItem;
