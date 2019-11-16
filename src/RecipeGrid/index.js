import React, { Component } from 'react';
import './index.css'
import { RecipeCard } from '../RecipeCard'

export const RecipeGrid = ({results, openRecipe}) => {
  return(
    results ?
    <div className="recipe-card-grid">
      {
        results.map((recipe, index) =>
          <div key={index} className="App-recipe-card">
            <RecipeCard
              title={recipe['title']}
              field_images={recipe['field_images']}
              field_summary={recipe['field_summary']}
              openRecipe={openRecipe}
              index={index}
              ></RecipeCard>  
          </div>
      )}
    </div>
      : <h1>Loading</h1>
  )
}