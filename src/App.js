import React, { Component } from 'react';
import './App.css';
import {
  BASE_URL,
  API
} from './constants'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null
    };
    this.getRecipes = this.getRecipes.bind(this)
  }

  componentDidMount() {
    this.getRecipes()
  }

  render() {
    const { results } = this.state;
    return(
      results ?
      <div>
        {
          results.map(recipe => 
            <RecipeCard
              title={recipe['title']}
              field_images={recipe['field_images']}
              body={recipe['body']}  ></RecipeCard>
        )}
      </div>
        : <h1>Loading</h1>
    )
  }

  getRecipes() {
    fetch(`${BASE_URL}${API}/rec`).then(response => {
      console.log(response);
      
      return response.json()  
    }).then(results => {
      this.setState({ results })
    })
  }
}


const RecipeCard = ({title, field_images, body}) => {
  let img = field_images.split(',').slice(-1)[0].trim();
  return(
    <div className="recipe-card">
      <div className="recipe-img">
        <img src={`${BASE_URL}${img}`}></img>
      </div>
      <div>
        { title }
      </div>
    </div>
  )
}


export default App;
