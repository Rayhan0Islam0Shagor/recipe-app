import { useEffect, useState } from 'react';
import './App.css';
import RecipeComp from './RecipeComp';
import Spinner from './Spinner';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('mango');

  const APP_ID = '20e6eb33';
  const APP_KEY = '9a44e40ce42a20c755667c1c26df4337';


  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div style={{ paddingBottom: "70vh" }} className="bg-dark">
      <div className="app container">
        <form onSubmit={getSearch} className="input-group w-75 ml-auto mr-auto mb-5 pt-5">

          <input
            onChange={updateSearch}
            required
            type="text"
            className="form-control"
            placeholder="Search Recipe"
            aria-label="Search Recipe"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">

            <button
              className="btn btn-secondary"
              type="submit"
              id="button-addon2">
              Button
              </button>
          </div>
        </form>

        {
          recipes.length === 0 || undefined ? <Spinner /> :
            <div className="row">
              {
                recipes.map(recipe => (
                  <RecipeComp key={Math.random() * 5000 + 1} ingredients={recipe.recipe.ingredients} recipe={recipe.recipe} ></RecipeComp>
                ))
              }
            </div>
        }
      </div>
    </div>
  );
}

export default App;
