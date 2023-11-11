import Link from "next/link";
import React from "react";

const PortfolioItem = ({ item }) => {
  // console.log(item);
  return (
    <li className={`${item.bgImage} bg-cover`}>
      <Link href={`/portfolio/${item.label}`}>
        <div className="w-48 h-64 border relative transition duration-150 hover:first:text-green-400">
          <span className="absolute bottom-4 right-4 capitalize text-xl font-semibold">{item.label}</span>
        </div>
      </Link>
    </li>
  );
};

export default PortfolioItem;
