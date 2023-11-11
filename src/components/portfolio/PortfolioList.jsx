import React from "react";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    label: "illustration",
    bgImage: 'bg-[url("/illustration.png")]',
  },
  {
    id: 2,
    label: "websites",
    bgImage: 'bg-[url("/websites.jpg")]',
  },
  {
    id: 3,
    label: "application",
    bgImage: 'bg-[url("/apps.jpg")]',
  },
];

// console.log(portfolio1);

const PortfolioList = () => {
  return (
    <>
      <div className="mt-4">
        <p className="mb-2">Choose a gallery</p>
      </div>
      <ul className="flex gap-8">
        {portfolioData?.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default PortfolioList;
