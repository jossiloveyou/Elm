/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Header, Home_nav, Home_center } from '@@'
import { HOME_FETCH_NAV, HOME_FETCH_SHOP } from '@/constants/actionTypes'
import homeAction from '@/actions/home'
import str from '@/utils/string'
import './styles.less'

export default connect(
({home})=> {
  console.log(home)
    return{
      datas:home.datas,
      shop:home.shop
    }
  },{
    getNav: homeAction[str(HOME_FETCH_NAV)],
    getShop: homeAction[str(HOME_FETCH_SHOP)],
  }
)(Home)

function Home (props) {
  const { datas, getNav, shop, getShop } = props
  useEffect( () => {
    getNav()
    getShop()
  },[])
  
  return (
    <div className="home-box">
      <Header 
        lef="/search"
        cen='/city'
        rig="/login"
        title={['','宏伊国际广场', '登录|注册']}
        icons={['sousuo']}
        
      />
      <div className="home-sec">
        <Home_nav data={datas}/>
        <Home_center data={shop}/>
      </div>
    </div>
  )
}

