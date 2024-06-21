"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);
  const leadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      setMeals(data.meals);
      // console.log(meals);
      setError("");
    } catch (error) {
      // console.log(error);
      setError("No Data Found");
    }
  };
  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    leadData();
  }, [search]);

  // if (meals.length === 0) {
  //   return (
  //     <h6 className="flex justify-center font-bold text-red-500 mt-5">
  //       No data found
  //     </h6>
  //   );
  // }

  return (
    <div className="mt-4 gap-4">
      <div className="flex justify-center gap-2">
        <input
          onChange={handler}
          type="text"
          placeholder="Search Meals..."
          className="border-2 rounded-xl p-4 outline-none text-cyan-500"
        />
        <button
          onClick={() => leadData()}
          className="border-2 px-2 text-cyan-500 font-bold rounded-xl"
        >
          Search
        </button>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-12 container rounded-xl mx-auto">
        {meals.length > 0 &&
          !error &&
          meals.map((meal) => (
            <div key={meal.idMeal} className="border-2 p-4">
              <Image
                className="rounded-xl mb-2"
                width={500}
                height={500}
                src={meal.strMealThumb}
                alt={meal.strMeal}
              ></Image>
              <h6 className="text-center font-bold mb-2">{meal.strMeal}</h6>
              <p>{meal.strInstructions}</p>
            </div>
          ))}
      </div>
      {error && (
        <div className="flex justify-center">
          <h6 className="font-bold text-red-500 mt-5">No data found</h6>
        </div>
      )}
    </div>
  );
};

export default Meals;
