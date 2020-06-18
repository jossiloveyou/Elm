import React, { useEffect} from 'react'
import { Header, Home_nav, Home_center } from '@@'
import { connect } from 'react-redux'
import './styles.less'
import { getNav,getShop } from '@/actions/home'

function Home (props) {
  const { datas, getNav, shop, getShop } = props
  useEffect( () => {
    getNav()
  },[])
  useEffect( () => {
    getShop()
  },[])
  return (
    <div className="home-box">
      <Header 
        title={['icon', '中华广场', '登录|注册']}
      />
      <div className="home-sec">
        <Home_nav data={datas}/>
        <Home_center data={shop}/>
      </div>
    </div>
  )
}

export default connect(
  ({home})=> {
     return{
       datas:home.datas,
       shop:home.shop
     }
   },{
     getNav,
     getShop
   }
 )(Home)