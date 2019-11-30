import React, { Component } from 'react';
import './index.css'
import {
  BASE_URL,
  HOME
} from '../constants'

export class HomePage extends Component {

  constructor(props) {
    super(props);
    this.getHomePage = this.getHomePage.bind(this)
    this.state = { result: null}
  }

  componentDidMount() {
    this.getHomePage()
  }

  render() {
    let { result } = this.state
    return(
      result ? 
        <>
          <h3> {result['title']} </h3>
          <div dangerouslySetInnerHTML={{__html: result['body']}}>
          
          </div>
        </>
        : <h2>Loading</h2>
    )
  }

  getHomePage() {
    fetch(`${BASE_URL}${HOME}`).then(res => 
      res.json()
    ).then(result => {
      this.setState({ result: result[0] })
    })
  }
}