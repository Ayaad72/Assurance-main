import React from "react";

const Percentage = ({ title, apr, term, amount, color }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:opacity-90 duration-300">
      <div className={`border-t-4 ${color} rounded-t-lg`}></div>
      <h2 className="text-gray-800 text-xl font-semibold mt-4">{title}</h2>
      <p className="text-3xl font-bold text-gray-900 mt-2">{apr}%</p>
      <p className="text-gray-600 mt-2">{term}</p>
      <p className="text-gray-500 mt-2">${amount} LOAN</p>
    </div>
  );
};

export default Percentage;
