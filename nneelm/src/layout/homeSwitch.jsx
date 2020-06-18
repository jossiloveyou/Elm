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
          <NavLink to="/home">
            <li>
                <p></p>
                <p>外卖</p>
            </li>
          </NavLink>
          <NavLink to="/search">
            <li>
                <p></p>
                <p>搜索</p>
            </li>
          </NavLink>
          <NavLink to="/orderform">
            <li>
                <p></p>
                <p>订单</p>
            </li>
          </NavLink>
          <NavLink to="/my">
            <li>
                <p></p>
                <p>我的</p>
            </li>
          </NavLink>
        </ul> 
      </div>
    )
  }
}
