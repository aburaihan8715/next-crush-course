import Image from "next/image";
import React from "react";
import LinkBtn from "@/ui/LinkBtn";

export const metadata = {
  title: "Next || About",
  description: "Learning next js",
};

const About = () => {
  return (
    <div className="mb-10">
      <div className="relative">
        <div className="h-80 relative">
          <Image
            className="object-cover grayscale"
            fill={true}
            src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
            alt="banner image"
          />
        </div>
        <div className="absolute bottom-3 left-3 bg-green-600 p-2">
          <h1 className="text-2xl font-semibold">Digital Storytellers</h1>
          <h2 className="font-semibold">Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex-1 mt-8 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold capitalize">Who are we?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          </p>
        </div>

        <div className="flex-1 mt-8 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold capitalize">What we do?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur eligendi atque quas eveniet doloribus illo facilis minus optio
            perspiciatis?
          </p>

          <ul className="flex flex-col gap-4">
            <li>- Dynamic Websites</li>
            <li>- Fast and Handy</li>
            <li>- Mobile Apps</li>
          </ul>

          <div>
            <LinkBtn text={`contact`} url={`/contact`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
