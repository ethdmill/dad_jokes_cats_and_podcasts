import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class Joke extends Component {

  constructor() {
    super();
    this.state = {
      joke: ''
    };
  }

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

  async componentDidMount() {
    return await this.getData()
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Button variant='primary' size='lg' onClick={this.getData}>Another Dad Joke!</Button>
        <h2>{this.state.joke}</h2>
      </div>
    );
  }

}

export default Joke;
