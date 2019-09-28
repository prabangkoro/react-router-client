import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
  return (
    <div>
      <div>Page One</div>
        <Link to="/page-two">
          Page Two
        </Link>
    </div>
  )
}


const PageTwo = () => {
  return (
    <div>
      <div>Page Two</div>
      <div>
        <Link to="/">
          Home
        </Link>
      </div>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={PageOne} />
            <Route path="/page-two" component={PageTwo} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
