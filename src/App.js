import React, { Component } from 'react';
import './App.css';
import {
  BASE_URL,
  API
} from './constants'

import { RecipeGrid } from './RecipeGrid'
import {Header } from './Header'
import { HomePage } from './HomePage';
import { SingleRecipe } from './SingleRecipe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      page: "recipe-list"
    };
    this.getRecipes = this.getRecipes.bind(this)
    this.getBody = this.getBody.bind(this)
    this.openRecipe = this.openRecipe.bind(this)
  }

  componentDidMount() {
    this.getRecipes()
  }

  render() {
    return (
      <>
      <Header></Header>
      { this.getBody() }
      </>
    )
    

  }

  getRecipes() {
    fetch(`${BASE_URL}${API}/rec`).then(response => {
      return response.json()  
    }).then(results => {
      this.setState({ results })
    })
  }

  onRecipeClick(event) {

  }

  getBody() {
    const { results, page, recipe_num } = this.state;    
    switch(page) {
      case "recipe-list":
        return (<><RecipeGrid results={results} openRecipe={this.openRecipe}/></> );
      case "home-page":
        return (<><HomePage/></>)
      case "single-recipe":
        return (<><SingleRecipe results={results} initialIndex={recipe_num}/></>)
    }
  }
  openRecipe(recipe_num) {
    console.log(recipe_num);   
    this.setState({page: "single-recipe", recipe_num})
  }

}

export default App;
