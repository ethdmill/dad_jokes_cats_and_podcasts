// Import statements necessary for React to play nice with its dependencies
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Joke from './Joke'
import Cat from './Cat'
import Podcast from './Podcast'

// Simple class that renders welcome text
class Home extends React.Component {

  render() {
    return (
      <h1 className="h1 text-center mt-5">Pick one of the options above!</h1>
    )
  }

}

// Main class that renders links to each of the three components as a top navbar
class App extends React.Component {

  render() {
    return (
      <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <li class="nav-link"><Link to='/joke'>Dad Joke</Link></li>
            <li class="nav-link"><Link to='/cat'>Random Cat Picture</Link></li>
            <li class="nav-link"><Link to='/podcast'>Podcast Search</Link></li>
          </nav>
        <Route path='/' exact component={Home} />
        <Route path='/joke' exact component={Joke} />
        <Route path='/cat' exact component={Cat} />
        <Route path='/podcast' exact component={Podcast} />
      </Router>
    );
  }

}

// Export statement allows everything to be displayed via an import in index.js
export default App
