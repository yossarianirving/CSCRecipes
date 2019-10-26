import React, { Component } from 'react';
import { BASE_URL } from '../constants';
import './index.css'

export const RecipeCard = ({title, field_images, body, view_node, ingredients, summary}) => {
  let img = field_images.split(',').slice(-1)[0].trim();
  return(
    <div className="recipe-card">
      <img src={`${BASE_URL}${img}`} className="recipe-card-img"></img>
      <div className="recipe-card-title">
        { title }
      </div>
      <div className="recipe-card-summary">
        { summary }
      </div>
    </div>
  )
}