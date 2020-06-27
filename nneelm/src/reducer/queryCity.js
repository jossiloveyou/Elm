import { handleActions } from 'redux-actions'
import { CITY_FETCH_QUERY, CITY_FETCH_SEARCH, CITY_FETCH_HISTORY, CITY_FETCH_DEL_HIS } from '@/constants/actionTypes'
const defaultState = {
 queryData: {},
 historyData: [],
 data: [],
}

export default handleActions ({
  [CITY_FETCH_QUERY]: (state, action) =>  ({ ...state, queryData: action.payload }),
  [CITY_FETCH_SEARCH]: (state, action) =>  ({ ...state, data: action.payload }),
  [CITY_FETCH_HISTORY]: (state, action) => {
    
    const is = state.historyData.find(v => {
      return v.name === action.payload.name
    })
    if (!is) state.historyData.push(action.payload)
    return { ...state, historyData: state.historyData }
  },
  [CITY_FETCH_DEL_HIS]: (state, action) => ({ ...state, historyData: [] }),
}, defaultState)
