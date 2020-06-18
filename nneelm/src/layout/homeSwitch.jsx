import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import { Home, Search, OrderForm, My } from '@/routers/assembly'
import './styles.less'

export default class HomeSwitch extends Component {
  render() {
    return (
      <div className="hs-box">
         <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/orderform" component={OrderForm}/>
          <Route path="/my" component={My}/>
          <Redirect to="/home"/>
        </Switch>
        <ul className="hs-foot">
          <li>
            <NavLink to="/home">
              <p></p>
              <p>外卖</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              <p></p>
              <p>搜索</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orderform">
              <p></p>
              <p>订单</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/my">
              <p></p>
              <p>我的</p>
            </NavLink>
          </li>
        </ul> 
      </div>
    )
  }
}
