import React, { Component } from 'react';
import { BASE_URL } from '../constants';
import './index.css'

export class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.results,
      index: this.props.initialIndex
    }
    this.nextRecipe = this.nextRecipe.bind(this)
    this.previousRecipe = this.previousRecipe.bind(this)
  }

  render() {
    let {results, index} = this.state
    let recipe = results[index]
    let {title, field_ingredients, body, field_images} = recipe;
    let img = field_images.split(',').slice(-1)[0].trim();
    let ingredients = field_ingredients.split(',')
    return(
      <>
        <h2>{ title }</h2>
        <img src={`${BASE_URL}${img}`}></img>
        <h3>Ingredients</h3>
        <ul>
        { ingredients.map((ingredient, index) => 
            <li key={index}>{ ingredient }</li>
        )}
        </ul>
        <p dangerouslySetInnerHTML={{__html: body}}></p>
        <button id="prev-recipe" onClick={this.previousRecipe}>Previous Recipe</button>
        <button id="next-recipe" onClick={this.nextRecipe}>Next Recipe</button>
      </>
    )
  }

  nextRecipe() {
    let {results, index} = this.state
    if (results.length && index >= (results.length - 1)) {
      index = 0;
    }
    else {
      index++
    }
    window.location.hash = "recipes/" + index
    this.setState({
      index
    })
  }

  previousRecipe() {
    let {results, index} = this.state
    if (results.length && index === 0) {
      if (results.length !== 0) {
        index = results.length - 1
      }
    }
    else {
      index--
    }
    window.location.hash = "recipes/" + index
    this.setState({
      index
    })
  }
}