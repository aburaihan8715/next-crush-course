import LinkBtn from "@/ui/LinkBtn";
import Image from "next/image";
import React from "react";

const DetailsItem = () => {
  return (
    <div className="flex gap-8 items-center odd:flex-row-reverse">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold capitalize mb-3">creative portfolio</h2>
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequuntur nemo quia accusantium explicabo ab placeat, delectus
          illum sequi corrupti!
        </p>

        <div>
          <LinkBtn text={`see more`} url={`#`} />
        </div>
      </div>

      <div className="flex-1">
        <div className="relative w-full h-80">
          <Image
            className="object-cover"
            fill={true}
            src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
            alt="banner image"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsItem;
