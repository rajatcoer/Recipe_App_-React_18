import React from "react";

function RecipeItem({ recipe: { name, cuisine, photo, ingredients, preparation }, index, handleDelete }) {
    return (
        <tr key={index}>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td><img alt={photo} src={photo} /></td>
            <td className="content_td"><p>{ingredients}</p></td>
            <td className="content_td"><p>{preparation}</p></td>
            <td><button name="delete" onClick={ () => {
                handleDelete(index);
            }}>Delete</button></td>
        </tr>
    )
}

export default RecipeItem