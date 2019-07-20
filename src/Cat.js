import React, { Component } from 'react'

class Cat extends Component {

  constructor() {
    super();
    this.state = {
      cat: ''
    };
  }

  getData = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search')
    const catJSON = await response.json()
    this.setState({ cat: catJSON[0].url })
  }

  async componentDidMount() {
    return await this.getData()
  }

  render() {
    return (
      <div>
        <button onClick={this.getData}>More Cats Right Meow</button>
        <img src={this.state.cat} />
      </div>
    );
  }

}

export default Cat;
