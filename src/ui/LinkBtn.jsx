import Link from "next/link";
import React from "react";

const LinkBtn = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="capitalize px-4 py-2 bg-green-700 rounded-md">{text}</button>
    </Link>
  );
};

export default LinkBtn;
