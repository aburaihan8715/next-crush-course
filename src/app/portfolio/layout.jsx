import React from "react";

export default function PortfolioLayout({ children }) {
  return (
    <div>
      <h1 className="text-4xl font-semibold capitalize">Our Works</h1>
      <div className="">{children}</div>
    </div>
  );
}
