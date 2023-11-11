import Image from "next/image";
import React from "react";
import heroImg from "../../public/hero.png";
import LinkBtn from "@/ui/LinkBtn";

const Hero = () => {
  return (
    <section>
      <div className="flex gap-10 items-center">
        <div className="flex-1">
          <h1 className="text-5xl bg-gradient-to-b from-green-500 to-gray-300 bg-clip-text text-transparent font-semibold">
            Better design for your digital products.
          </h1>
          <p className="mt-6">Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
          <div className="mt-6">
            <LinkBtn text={`see our words`} url={`/portfolio`} />
          </div>
        </div>
        <div className="custom-animation-up-down-t2 flex-1">
          <Image className="w-full h-96 object-contain" src={heroImg} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
