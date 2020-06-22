/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SHOP_FETCH_FOOD } from '@/constants/actionTypes'
import shopAction from '@/actions/shop'
import str from '@/utils/string'
import './style.less'

export default connect(({ shop }) => ({
  data: shop.data
}),{
  getShop_menu: shopAction[str(SHOP_FETCH_FOOD)],
})(Shop)
  
function Shop ({ data, getShop_menu, match }) {
  const { id } = match.params
  
  useEffect( () => {
    getShop_menu(id)
  },[id])

  return (
    <div>
      {
        data.map(v => {
        return (
          <div key={v.id}>
            {v.name}
          </div>
        )
        })
      }
    </div>
  )
}
