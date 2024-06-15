import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, handleDelete }) {

  return (
    <div className="recipe-list">
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Cuisine</th>
                <th>Photo</th>
                <th>Ingredients</th>
                <th>Preparation</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {recipes.map((recipe, index) => <RecipeItem recipe={recipe} index={index} handleDelete={handleDelete}></RecipeItem>)}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;