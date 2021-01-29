import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";

const Recipe = (props) => {
  const id = useParams().id;
  const recipe = props.recipes[id];
  return (
      <div>
        <a href="/">tagasi</a>
         <h2>{recipe.name}</h2> 
         <p>Duration {recipe.duration} min</p>
         <ul>
   {recipe.ingredients.map((ingredient, index) => {
     return <li key={index}>{ingredient}</li>;
   })}
 </ul>
          <p>{recipe.preparation}</p>
      </div>
  )
}

export default Recipe