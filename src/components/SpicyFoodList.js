import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisine, setFilteredBy] =useState("All");

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodList = [...foods, newFood]
    setFoods(newFoodList)
  }

  function removeFood(id) {
    const newFoodList = foods.filter(food => food.id !== id)
    setFoods(newFoodList)
  }

  function addHeatLevel(id) {
    const newFoodList = foods.map(food => {
      return food.id === id ? {...food, heatLevel: food.heatLevel + 1} : food
    })
    setFoods(newFoodList)
  }
  console.log(foods)

  function filterFoods(event) {
    setFilteredBy(event.target.value)
  }

  const filteredFoods = foods.filter(food => {
    if(cuisine === "All"){
      return true
    } else {
      return food.cuisine === cuisine
    }
  })

  const foodList = foods.map((food) => (
    const foodList = filteredFoods.map((food) => (
      <li key={food.id}>
        {food.name} | Heat: {food.heatLevel} <button className="span" onClick={() => addHeatLevel(food.id)}>+</button> | Cuisine: {food.cuisine}
        <button className="remove span" onClick={() => removeFood(food.id)}>X</button>
      </li>
    ));
    
    return(
      <div>
      <button className="button" onClick={handleAddFood}>Add New Food</button>
      <div className="controls">
        <button className="button" onClick={handleAddFood}>Add New Food</button>
        <select name="filter" onChange={filterFoods}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
        </select>
      </div>
      <ul>{foodList}</ul>
    </div>
  );
}