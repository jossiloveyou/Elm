import { handleActions } from 'redux-actions'
import { CITY_FETCH_QUERY } from '@/constants/actionTypes'
const defaultState = {
 queryData: {},
}

export default handleActions ({
  [CITY_FETCH_QUERY]: (state, action) =>  ({ ...state, queryData: action.payload }),
}, defaultState)
