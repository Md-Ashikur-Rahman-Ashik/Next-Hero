"use client"
import React, { useState } from "react";

const Page = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="card card-compact container rounded-xl mx-auto">
      <h2 className="text-6xl font-bold flex justify-center">
        Choose Your Meals
      </h2>
      <p className="flex justify-center text-3xl mt-4">
        Choose meals by searching...
      </p>
      <div className="flex justify-center mt-4 gap-4">
        <input
          type="text"
          placeholder="Search Meals..."
          className="border-2 rounded-xl p-4 outline-none text-cyan-500"
        />
        <button className="border-2 px-2 text-cyan-500 font-bold rounded-xl">
          Search
        </button>
      </div>
    </div>
  );
};

export default Page;
