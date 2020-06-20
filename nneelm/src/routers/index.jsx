import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Login, Basic, City, QueryCity } from './assembly'

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/city/:id" component={QueryCity}/>
          <Route path="/login" component={Login}/>
          <Route path="/city" component={City}/>
          <Route path="/home" component={Basic}/>
          <Redirect to="/city"/>
        </Switch>
      </BrowserRouter>
    )
  }
}
