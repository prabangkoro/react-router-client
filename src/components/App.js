import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StreamNew from './streams/StreamNew'
import StreamList from './streams/StreamList'
import StreamEdit from './streams/StreamEdit'
import StreamDetail from './streams/StreamDetail'
import StreamDelete from './streams/StreamDelete'
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamNew} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/detail" exact component={StreamDetail} />
            <Route path="/streams/delete" exact component={StreamDelete} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
