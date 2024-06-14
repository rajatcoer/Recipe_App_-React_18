import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {
  
  // Displayed the list of recipes using the structure of table that is provided.
  // Created one additional component RecipeView to provide the list of recipes in the table rows.
  // Each recipe row have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

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
          {recipes.map((recipe, index) => (
            <RecipeView
              deleteRecipe={() => deleteRecipe(index)}
              index={index}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
