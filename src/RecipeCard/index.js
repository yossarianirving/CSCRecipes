import React, { Component } from 'react';
import { BASE_URL } from '../constants';
import './index.css'

export const RecipeCard = ({title, field_images, body, view_node, ingredients}) => {
  let img = field_images.split(',').slice(-1)[0].trim();
  return(
    <div className="recipe-card">
      <div className="recipe-img">
        <img src={`${BASE_URL}${img}`}></img>
      </div>
      <div className="recipe-title">
        { title }
      </div>
    </div>
  )
}