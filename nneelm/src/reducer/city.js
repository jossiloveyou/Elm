import { handleActions } from 'redux-actions'
import { CITY_FETCH_HOT, CITY_FETCH_ALL } from '@/constants/actionTypes'
const defaultState = {
  hotCity: [],
  allCity:[],
}

export default handleActions ({
  [CITY_FETCH_HOT]: (state, action) => ({...state, hotCity: action.payload}),
  [CITY_FETCH_ALL]: (state, action) => {
    let arr = Object.entries(action.payload).sort(function(a,b){return a[0].localeCompare(b[0])})
    console.log(arr);
    return {...state, allCity: arr}
  },
}, defaultState)
