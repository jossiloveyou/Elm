import { handleActions } from 'redux-actions'
import { SHOP_FETCH_FOOD } from '@/constants/actionTypes'
const defaultState = {
  data: []
}

export default handleActions ({
  [SHOP_FETCH_FOOD]: (state, action) =>{
    console.log(action.payload)
    return {...state, data: action.payload}
  },
}, defaultState)
