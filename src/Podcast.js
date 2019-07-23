// Imports React capabilites
import React, { Component } from 'react'

// Class that contains Podcast component
class Podcast extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      podcast: null
    };
  }

  // Asynchronous function that pulls data from API and sets the component state
  getData = async (e) => {
    const query = e.target.value
    const response = await fetch('http://api.porios.com/omnisearch?query=' + query)
    const podcastJSON = await response.json()
    this.setState({
      query: query,
      podcast: (podcastJSON.map(x => x.podcasts)[0] || [] )[0]
    })
  }

  // Ensures that podcast data is found unless the searched string doesn't appear in any JSON data
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

  // Renders JSX on the page that relies on API for content
  render() {
    return (
      <div className='text-center'>
        <form>
          <input className='mt-5 text-center' type='text' value={this.state.query} onChange={this.getData} placeholder='Find a podcast!' />
        </form>
        <div className="p-4 my-1">
          {this.renderPodcast(this.state.podcast)}
        </div>
      </div>
    );
  }

}

// Export statement allows component to be used via App.js
export default Podcast;
