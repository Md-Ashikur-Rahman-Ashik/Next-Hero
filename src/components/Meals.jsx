"use client";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const leadData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    );
    const data = res.json();
    setMeals(data.meals);
  };
  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    leadData();
  }, [search]);

  return (
    <div className="flex justify-center mt-4 gap-4">
      <input
        onChange={handler}
        type="text"
        placeholder="Search Meals..."
        className="border-2 rounded-xl p-4 outline-none text-cyan-500"
      />
      <button className="border-2 px-2 text-cyan-500 font-bold rounded-xl">
        Search
      </button>
      <div className="mt-12 grid grid-cols-3"></div>
    </div>
  );
};

export default Meals;
