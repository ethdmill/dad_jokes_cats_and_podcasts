import React, { Component } from 'react'

class Podcast extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      podcast: null
    };
  }

  getData = async (e) => {
    const query = e.target.value
    const response = await fetch('http://api.porios.com/omnisearch?query=' + query)
    const podcastJSON = await response.json()
    this.setState({
      query: query,
      podcast: (podcastJSON.map(x => x.podcasts)[0] || [] )[0]
    })
  }

  renderPodcast = (podcast) => {
    if (podcast) {
      return (
        <div>
          <h1>Title: {podcast.name}</h1>
          <h4>Description: {podcast.description}</h4>
          <h4>Genre: {podcast.genre}</h4>
          <h4>Release Date: {podcast.release_date}</h4>
        </div>
      )
    } else {
      return (
        <div>
          <h2>No podcast found under this query!</h2>
        </div>
      )
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <input type='text' value={this.state.query} onChange={this.getData} placeholder='Find a podcast!' />
        </form>
        {this.renderPodcast(this.state.podcast)}
      </div>
    );
  }

}

export default Podcast;
