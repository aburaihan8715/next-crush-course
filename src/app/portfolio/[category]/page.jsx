import DetailsItem from "@/components/portfolio/DetailsItem";
import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Next || portfolio category",
  description: "Learning next js",
};

const getData = (category) => {
  const data = items[category];
  if (data) return data;
  return notFound();
};

const PortfolioDetailsByCategory = ({ params }) => {
  const { category } = params;
  const data = getData(category);
  // console.log(data);

  return (
    <div>
      <span className="capitalize font-semibold text-green-600">{category}</span>
      <div className="space-y-20 my-8">
        {data.map((item) => (
          <DetailsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetailsByCategory;
