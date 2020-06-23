import { handleActions } from 'redux-actions'
import { CITY_FETCH_QUERY, CITY_FETCH_SEARCH } from '@/constants/actionTypes'
const defaultState = {
 queryData: {},
 historyData: [],
 data: [],
}

export default handleActions ({
  [CITY_FETCH_QUERY]: (state, action) =>  ({ ...state, queryData: action.payload }),
  [CITY_FETCH_SEARCH]: (state, action) =>  ({ ...state, data: action.payload }),
}, defaultState)
