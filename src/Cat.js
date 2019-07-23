// Imports React capabilites
import React, { Component } from 'react'

// Class that contains Cat component
class Cat extends Component {

  constructor() {
    super();
    this.state = {
      cat: ''
    };
  }

  // Asynchronous function that pulls data from API and sets the component state
  getData = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search')
    const catJSON = await response.json()
    this.setState({ cat: catJSON[0].url })
  }

  // Waits for data to ensure it picks it up
  async componentDidMount() {
    return await this.getData()
  }

  // Renders JSX on the page that relies on API for content
  render() {
    return (
      <div className='text-center'>
        <div>
          <button className='btn btn-primary mt-5' onClick={this.getData}>More Cats Right Meow!</button>
        </div>
        <div>
          <img className="img-fluid p-4 my-1" src={this.state.cat} alt="Loading a floof..." />
        </div>
      </div>
    );
  }

}

// Export statement allows component to be used via App.js
export default Cat;
