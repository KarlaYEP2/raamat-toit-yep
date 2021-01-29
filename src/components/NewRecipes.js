import React, { useState, useEffect } from 'react';
import { withRouter ,BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";

const NewRecipe = (props) => {
    var [recipename, setRecipeName] = useState("");
    var [recipeduration, setRecipeDuration] = useState("");
    var [recipeingredient, setRecipeIngredient] = useState("");
    var [recipepreparation, setRecipePraparation] = useState("");
    var [newRecipe, setNewRecipe] = useState({});

function combineRecipe(event) {
    event.preventDefault()
    var empty = []
    empty = recipeingredient.split(",")
    setNewRecipe ({
        name : recipename,
        duration : recipeduration,
        ingredients : empty,
        preparation : recipepreparation
    })
}

    useEffect(() => {
        if (Object.keys(newRecipe).length !== 0) {
          props.addRecipe(newRecipe);
          props.history.push("/");
          setNewRecipe({});
        }
      }, [newRecipe, props]);
    return( 
    <form>
        <legend>Uus retsept</legend> <br></br>
        <label for="name">Nimi: </label><br></br>
        <input type="text" id="name" onInput={(event) => {setRecipeName(event.target.value);}} required/><br></br>
        <label for="duration">Duration: </label><br></br>
        <input type="number" id="duration" onInput={(event) => {setRecipeDuration(event.target.value);}} required/><br></br>
        <label for="ingredient">ingredients: </label><br></br>
        <input type="text" id="ingredient" onInput={(event) => {setRecipeIngredient(event.target.value);}} required/><br></br>
        <label for="preparation"> preparation</label> <br></br>
        <textarea id="preparation"  onInput={(event) => {setRecipePraparation(event.target.value);}} required></textarea> <br></br>
        <input type="submit" onClick={(event) => combineRecipe(event)}/> 

     </form>
    )
}

export default withRouter(NewRecipe);
