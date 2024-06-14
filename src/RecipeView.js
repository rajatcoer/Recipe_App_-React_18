
function RecipeView({ recipe, index, deleteRecipe }) {
  // Create one additional component RecipeView to provide the list of recipes in the table rows to the RecipeList.
  return (
    <tr key={index}>
      <td><p>{recipe.name}</p></td>
      <td><p>{recipe.cuisine}</p></td>
      <td> 
        <p><img alt={recipe.photo} src={recipe.photo} className="style-img" /></p>
      </td>
      <td className="content_td"><p rows="2">{recipe.ingredients}</p></td>
      <td className="content_td"><p rows="2">{recipe.preparation}</p></td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;