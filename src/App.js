import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const updateRecipes = (recipe) => {
    setRecipes((oldRecipes) => [...oldRecipes, recipe]);
  };

  const onDelete = (recipeIndex) => {
    setRecipes((oldRecipes) =>
      oldRecipes.filter((recipe, index) => index !== recipeIndex)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} handleDelete={onDelete} />
      <RecipeCreate addRecipes={updateRecipes} />
    </div>
  );
}

export default App;
