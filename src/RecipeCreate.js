import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // When the form is submitted, a new recipe will be created, and the form contents are cleared.
  // Added the required input and textarea form elements.
  // Added the required submit and change handlers.
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);
  const [cuisine, setCuisine] = useState("");
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const [photo, setPhoto] = useState("");
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const [ingredients, setIngredients] = useState("");
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const [preparation, setPreparation] = useState("");
  const handlePreparationChange = (event) => setPreparation(event.target.value);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", name, cuisine, photo, ingredients, preparation);
    createRecipe({ name, cuisine, photo, ingredients, preparation })
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>             
          <tr>
            <td><input type="text" id="name" name="name" onChange={handleNameChange}
          value={name} required="true" /></td>
            <td><input type="text" id="cuisine" name="cuisine" onChange={handleCuisineChange}
          value={cuisine} required="true" /></td>
            <td><input type="text" id="photo" name="photo" onChange={handlePhotoChange}
          value={photo} required="true" /></td>
            <td><textarea id="ingredients" name="ingredients" onChange={handleIngredientsChange}
          value={ingredients} required="true" rows="2" /></td>
            <td><textarea id="preparation" name="preparation" onChange={handlePreparationChange}
          value={preparation} required="true" rows="2" /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
