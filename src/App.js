import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  // Defined Recipe List using State.
  const [recipes, setRecipes] = useState(RecipeData);
  
  // Added the ability to create new recipes used by RecipeCreate.  
  const createRecipe = (newRecipe) =>
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      newRecipe
    ]);
  
  // Added the ability to delete an existing recipe used by RecipeList.
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((post, index) => index !== indexToDelete)
    );
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
