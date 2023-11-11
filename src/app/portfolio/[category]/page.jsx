import DetailsItem from "@/components/portfolio/DetailsItem";
import React from "react";

const PortfolioDetailsByCategory = ({ params }) => {
  const { category } = params;
  // console.log(params);
  return (
    <div>
      <span className="capitalize font-semibold text-green-600">{category}</span>
      <div className="space-y-20 my-8">
        <DetailsItem />
        <DetailsItem />
        <DetailsItem />
      </div>
    </div>
  );
};

export default PortfolioDetailsByCategory;
