import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { MealId } = useParams();
  const [info, setInfo] = useState(null);

  const getInfo = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`
    );
    const jsondata = await response.json();
    console.log(jsondata.meals[0]);
    setInfo(jsondata.meals[0]);
  };

  useEffect(() => {
    if (MealId) {
      getInfo();
    }
  }, [MealId]);

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mealInfo">
      <img src={info.strMealThumb} alt={info.strMeal} />
      <div className="Info">
        <h1>Recipe Detail</h1>
        <button>{info.strMeal}</button>
        <h3>Instructions</h3>
        <p>{info.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealInfo;
