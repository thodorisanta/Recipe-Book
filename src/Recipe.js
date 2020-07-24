import React from 'react';
import "./App.css";

const Recipe = ({title , image , ingredients}) => {
    
    return(
        <div>
            <h1 className="recipe-title"><span>{title}</span></h1>
            <img alt="recipe" src={image} />
            <ol>
                {ingredients.map(ingredient =>
                    <li className="ingredients">{ingredient}</li>
                )}
            </ol>
        </div>
    );
};

export default Recipe;