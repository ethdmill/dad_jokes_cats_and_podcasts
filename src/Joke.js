// Imports React capabilites
import React, { Component } from 'react'

// Class that contains Joke component
class Joke extends Component {

  constructor() {
    super();
    this.state = {
      joke: ''
    };
  }

  // Asynchronous function that pulls data from API and sets the component state
  getData = async () => {

    var myHeaders = new Headers({
      'Accept': 'application/json'
    });

    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };

    const response = await fetch('https://icanhazdadjoke.com/', myInit)
    const jokeJSON = await response.json()
    this.setState({ joke: jokeJSON.joke })
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
          <button className='btn btn-primary mt-5' onClick={this.getData}>Another Dad Joke!</button>
        </div>
        <div>
          <h2 className="p-4 my-3">{this.state.joke}</h2>
        </div>
      </div>
    );
  }

}

// Export statement allows component to be used via App.js
export default Joke;
