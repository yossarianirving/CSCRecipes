import React, {Component} from 'react';


export class Header extends Component {

  constructor(props) {
    super(props)
    this.navigate = this.navigate.bind(this)
  }
  
  render() {
    let { openPage } = this.props
    return (
      <header>
        <h1>Recipes</h1>
        <nav>
          <a id="to-home" href="#" onClick={this.navigate(openPage, 'home-page')} >Home</a>
          <a id="to-recipes" href="#recipes" onClick={this.navigate(openPage, 'recipe-list')} >All Recipes</a>
        </nav>
    </header>
    )
  }

  navigate(f, page) {
    return () => {
      f(page)
    }
  }
}
