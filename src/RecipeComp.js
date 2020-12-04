import React from 'react'

function RecipeComp({ recipe, ingredients }) {
    return (
        <div className="col-md-4 col-sm-12 p-4">
            <div className="card">
                <div className="images">
                    <img className="img rounded p-3" src={recipe.image} className="card-img-top" alt={recipe.label} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{recipe.label}</h5>
                    <h4 className="text-center">Ingredients 👇</h4>
                    <ul style={{ maxHeight: "200px", overflow: "scroll", overflowX: "hidden" }} className="list-group list-group-flush scrollbar">
                        {
                            ingredients.map(ingredient => <li className="list-group-item" key={Math.random()}>{ingredient.text}</li>)
                        }
                    </ul>
                </div>
                <div className="card-footer">
                    <p className="card-text text-muted font-weight-bold">Calories: {recipe.calories}</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeComp
