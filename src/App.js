import React, { Component } from 'react';
import './App.css';
import {
  BASE_URL,
  API
} from './constants'

import { RecipeGrid } from './RecipeGrid'
import {Header } from './Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      page: "recipe-list"
    };
    this.getRecipes = this.getRecipes.bind(this)
    this.getBody = this.getBody.bind(this)
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
    const { results, page } = this.state;
    switch(page) {
      case "recipe-list":
        return (<div><RecipeGrid results={results}/></div> )
    }
  }
}

export default App;
