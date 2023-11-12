"use client";
import React from "react";

const Error = ({ error }) => {
  return (
    <div className="text-center">
      <h2 className="font-semibold text-2xl">Something went wrong</h2>
      <p className="text-xl font-semibold">{error.message}</p>
    </div>
  );
};

export default Error;
