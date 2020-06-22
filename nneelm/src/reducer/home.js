import { handleActions } from 'redux-actions'
import { HOME_FETCH_NAV, HOME_FETCH_SHOP } from '@/constants/actionTypes'
const defaultState = {
  datas: [],
  shop:[]
}

export default handleActions ({
  [HOME_FETCH_NAV]: (state, action) => ({...state, datas: action.payload}),
  [HOME_FETCH_SHOP]: (state, action) => ({...state, shop: action.payload}),
}, defaultState)


