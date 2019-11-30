import React, { Component } from 'react';
import { BASE_URL } from '../constants';
import './index.css'

export class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.openSingleRecipe = this.openSingleRecipe.bind(this)
  }


  render() {
    let {title, field_images, field_summary, openRecipe} = this.props;
    let img = field_images.split(',').slice(-1)[0].trim();
    return(
      <div className="recipe-card">
        <img src={`${BASE_URL}${img}`} className="recipe-card-img" alt={title}></img>
        <button className="recipe-card-title" onClick={this.openSingleRecipe(openRecipe)}>
          { title }
        </button>
        <div className="recipe-card-summary">
          { field_summary }
        </div>
      </div>
    )
  }

  openSingleRecipe(f) {
    return () => {
       f(this.props.index) 
      }
  }
}