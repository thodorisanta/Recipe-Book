import React, {useEffect, useState } from 'react';
import Recipe from "./Recipe";
import "./App.css";


const App = () => {
    
    const [recipes , setRecipes] = useState([]);
    const [search , setSearch] = useState();
    const [query , setQuery] = useState("chichen");

    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch(
                `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
            );
            const data = await response.json();
            setRecipes(data.hits);
            console.log(data.hits);
        }
        getRecipes();
    }, [query]);

    
  

    const updateSearch = e => {
            setSearch(e.target.value);
            //console.log(search);
    }

    const getSearch = e => {
        e.preventDefault();
        
        if(search !== ""){
            setQuery(search);
        }
    }

    return(
        
        <div className="app">
            <h1 className="main-title">RECIPE BOOK</h1>
            <form className="search-form" onSubmit={getSearch}>
                <input
                placeholder="chicken"
                className="search-input"
                type="text"
                value={search}
                onChange={updateSearch}
                />
                <button className="search-button" type="submit" >
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredientLines}
                    />
                ))}
            </div>
        </div>
    )
}




export default App;
