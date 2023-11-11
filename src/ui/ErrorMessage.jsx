import React from "react";

const ErrorMessage = ({ error }) => {
  return <div className="text-center text-3xl text-red-500 font-semibold my-4">{`Something went wrong || ${error}`}</div>;
};

export default ErrorMessage;
