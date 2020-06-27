import React from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import { Home, Search, OrderForm, My } from '@/routers/assembly'
import { Icons } from '@@'
import './styles.less'

export default function HomeSwitch () {
  return (
    <div className="hs-box">
        <Switch>
        <Route path="/dist/home" component={Home}/>
        <Route path="/dist/search" component={Search}/>
        <Route path="/dist/orderform" component={OrderForm}/>
        <Route path="/dist/my" component={My}/>
        <Redirect to="/dist/home"/>
      </Switch>
      <ul className="hs-foot">
        <NavLink activeClassName="hs-act" to="/dist/home">
          <li>
              <p><Icons icons="changyonglogo40"/></p>
              <p>外卖</p>
          </li>
        </NavLink>
        <NavLink to="/dist/search">
          <li>
              <p><Icons icons="zhinanzhen"/></p>
              <p>搜索</p>
          </li>
        </NavLink>
        <NavLink to="/dist/orderform">
          <li>
              <p><Icons icons="ding_huabanfuben"/></p>
              <p>订单</p>
          </li>
        </NavLink>
        <NavLink to="/dist/my">
          <li>
              <p><Icons icons="wode1"/></p>
              <p>我的</p>
          </li>
        </NavLink>
      </ul> 
    </div>
  )
}
