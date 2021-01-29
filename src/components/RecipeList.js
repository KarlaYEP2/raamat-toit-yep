import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";

const RecipeList = (props, event) =>{
  /*
  function Delete(props) {
    var deleter = document.getElementById(props.index)
    console.log(deleter)
    deleter.remove()
  }
  */
    console.log(props.recipes)
    return (
      <div>
    <ul>
     {props.recipes.map((name, index) => {
       return <li id={index} key={index}>{name.name} {name.duration} min {<Link to={`/recipes/${index}`}>Vaata lähemalt</Link>} <span><input type="submit" onClick={() => props.removeRecipe(event,index)}/></span></li>;
     }) } 
   </ul>
      </div>
    )
  }

  export default  RecipeList