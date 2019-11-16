import React, { Component } from 'react';
import './index.css'

export class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.results,
      index: this.props.initialIndex
    }
    this.nextRecipe = this.nextRecipe.bind(this)
    this.previousRecipe = this.nextRecipe.bind(this)
  }

  render() {
    let {results, index} = this.state
    let recipe = results[index]
    let {title, field_images, field_ingredients, body} = recipe;
    let ingredients = field_ingredients.split(',')
    return(
      <>
        <h2>{ title }</h2>
        <h3>Ingredients</h3>
        <ul>
        { ingredients.map((ingredient, index) => 
            <li key={index}>{ ingredient }</li>
        )}
        </ul>
        <p dangerouslySetInnerHTML={{__html: body}}></p>
        <button onClick={this.previousRecipe}> Previous Recipe</button>
        <button onClick={this.nextRecipe}>Next Recipe</button>
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
    this.setState({
      index
    })
  }

  previousRecipe() {
    let {results, index} = this.state
    if (results.length && index == 0) {
      if (results.length != 0) {
        index = results.length - 1
      }
    }
    else {
      index--
    }
    this.setState({
      index
    })
  }
}