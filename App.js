import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";
import Recipe from "./components/Recipe";
import RecipeList from "./components/RecipeList";
import NewRecipes from "./components/NewRecipes";

const App = (props) => {  
  function removeRecipe() {
    setRecipes(recipes.splice(index, 1))
    document.getElementById(index).remove()
    }
  function addRecipe(newRecipe) {
    setRecipes(recipes.concat([newRecipe]));
  }
  const getRecipes = () => {
    fetch("data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(data => data.json()).then(data => setRecipes(data))
  }
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getRecipes();
  }, []);
  return(
    
    recipes.length !== 0 ? 
    (

<BrowserRouter>
   <Switch>
     <Route path="/new" exact>
      <NewRecipes addRecipe={addRecipe}/>
      <Link to="/">Tagasi</Link>
     </Route>
     <Route path="/" exact>
       <h1>Retseptiraamat</h1>
       <RecipeList recipes={recipes} removeRecipe={removeRecipe}/>
       <Link to="/new">Uus retsept</Link>
     </Route>
     <Route path="/recipes/:id">
       <Recipe recipes={recipes} />
     </Route>
     <Route path="/">
       <removeRecipe />
     </Route>
   </Switch>
   <p>test</p>

 </BrowserRouter>
    ) : (
      <p>Chotto matte</p>
    )
  )
}

export default App;