import React from "react";
import ProgramsList from "../components/ProgramsList";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function Programs() {
  useSmoothScroll();
  return (
    <div>
      <div className="py-8 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Nutrition Shop
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Premium supplements and nutrition products at genuine rates.
        </p>
      </div>
      <ProgramsList />
    </div>
  );
}
