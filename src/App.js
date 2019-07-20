import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Joke from './Joke'
import Chuck from './Chuck'
import Cat from './Cat'
import Podcast from './Podcast'


class Home extends React.Component {

  render() {
    return (
      <h1 class='h1'>Pick one of the three options!</h1>
    )
  }

}


class App extends React.Component {

  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li><Link to='/joke'>Dad Joke</Link></li>
            <li><Link to='/chuck'>Chuck Norris Joke</Link></li>
            <li><Link to='/cat'>Random Cat Picture</Link></li>
            <li><Link to='/podcast'>Podcast Search</Link></li>
          </ul>
        </nav>
        <Route path='/' exact component={Home} />
        <Route path='/joke' exact component={Joke} />
        <Route path='/chuck' exact component={Chuck} />
        <Route path='/cat' exact component={Cat} />
        <Route path='/podcast' exact component={Podcast} />
      </Router>
    );
  }
}

export default App