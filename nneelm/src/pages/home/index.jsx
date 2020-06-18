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
      {/* <Header/> */}
      <div className="home-head">
        <span>icon</span>
        <p>宏伊国际广场</p>
        <span>登陆|注册</span>
      </div>
      <Home_nav data={datas}/>
      <Home_center data={shop}/>
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