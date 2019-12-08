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
    this.openPage = this.openPage.bind(this)
  }

  componentDidMount() {
    this.getRecipes()
  }

  render() {
    return (
      <>
      <Header openPage={this.openPage}></Header>
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
        window.location.hash = "recipes"
        return (<><RecipeGrid results={results} openRecipe={this.openRecipe}/></> );
      case "home-page":
        window.location.hash = "home"
        return (<><HomePage/></>)
      case "single-recipe":
        window.location.hash = `recipes/${recipe_num}`
        return (<><SingleRecipe results={results} initialIndex={recipe_num}/></>)
      default:
        window.location.hash = "home"
        this.setState({ page: 'home-page'})
    }
  }
  openRecipe(recipe_num) {
    this.setState({page: "single-recipe", recipe_num})
  }
  // opens a page (all recipes or home page)
  // opening a single recipe is separate (could become one in the future)
  openPage(page) {
    this.setState({page})
  }

}

export default App;
