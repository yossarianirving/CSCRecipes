import React, { Component } from 'react';
import { BASE_URL } from '../constants';
import './index.css'

export class RecipeCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {title, field_images, field_summary} = this.props;
    let img = field_images.split(',').slice(-1)[0].trim();
    return(
      <div className="recipe-card">
        <img src={`${BASE_URL}${img}`} className="recipe-card-img"></img>
        <div className="recipe-card-title">
          { title }
        </div>
        <div className="recipe-card-summary">
          { field_summary }
        </div>
      </div>
    )
  }
}