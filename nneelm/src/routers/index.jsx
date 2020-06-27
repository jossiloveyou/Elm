import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Login, Basic, City, QueryCity,Shop } from './assembly'

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/city/:id" component={QueryCity}/>
          <Route path="/shop/:id" component={Shop}/>
          <Route path="/login" component={Login}/>
          <Route path="/city" component={City}/>
          <Route path="/dist" component={Basic}/>
          <Redirect to="/city"/>
        </Switch>
      </BrowserRouter>
    )
  }
}
