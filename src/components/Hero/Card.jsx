import React from "react";

const Card = ({ number, numberText, title }) => {
  return (
    <div className="pb-4">
      <h1 className="text-3xl font-bold">
        {number} <span className="text-base font-semibold">{numberText}</span>
      </h1>

      <p className="text-xl font-semibold text-gray-400">{title}</p>
    </div>
  );
};

export default Card;
