import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Basic } from './assembly'

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Basic}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
