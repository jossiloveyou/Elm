import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SHOP_FETCH_FOOD } from '@/constants/actionTypes'
import shopAction from '@/actions/shop'
import str from '@/utils/string'
import './style.less'
export default connect(
  ({shop})=> {
    console.log(shop)
      return{
        data:shop.data
      }
    },{
      getShop_menu: shopAction[str(SHOP_FETCH_FOOD)],
    }
  )(Shop)
  

function Shop ( props ) {
  const { data, getShop_menu, match } = props
  const { id } = match.params
  console.log(id)
  
  useEffect( () => {
    getShop_menu(id)
  },[id])

  return (
    <div>
      
    </div>
  )
}
