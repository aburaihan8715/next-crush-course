import LinkBtn from "@/ui/LinkBtn";
import Image from "next/image";
import React from "react";

const DetailsItem = ({ item }) => {
  return (
    <div className="flex gap-8 items-center odd:flex-row-reverse">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold capitalize mb-3">{item.title}</h2>
        <p className="mb-2">{item.desc}</p>

        <div>
          <LinkBtn text={`see more`} url={`#`} />
        </div>
      </div>

      <div className="flex-1">
        <div className="relative w-full h-80">
          <Image className="object-cover" fill={true} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" src={item.image} alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default DetailsItem;
