import React from "react";
import { NavLink } from "react-router-dom";

const Mealcards = ({ detail }) => {
  console.log(detail);

  return (
    <>
      <div className="meals">
        {!detail
          ? ""
          : detail.map((item) => {
              return (
                <div className="meal" key={item.idMeal}>
                  <div className="mealImg">
                    <img src={item.strMealThumb} alt="meal" />
                    <p>{item.strMeal}</p>
                    <NavLink to={`/${item.idMeal}`}>
                      <button>Recipe</button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Mealcards;
