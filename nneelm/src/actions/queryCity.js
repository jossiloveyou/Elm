import { createActions } from 'redux-actions'
import qs from 'qs'
import { CITY_FETCH_QUERY, CITY_FETCH_SEARCH, CITY_FETCH_HISTORY, CITY_FETCH_DEL_HIS } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export default createActions({
  [CITY_FETCH_QUERY]: options => get(api.onlyCity + options),
  [CITY_FETCH_SEARCH]: options => get(api.searchCity + qs.stringify(options)),
  [CITY_FETCH_HISTORY]: options => options,
  [CITY_FETCH_DEL_HIS]: () => {},
})

