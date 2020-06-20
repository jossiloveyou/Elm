import { createActions } from 'redux-actions'
import { CITY_FETCH_HOT, CITY_FETCH_ALL, CITY_FETCH_QUERY } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export default createActions({
  [CITY_FETCH_HOT]: () => get(api.hotCity),
  [CITY_FETCH_ALL]: () => get(api.allCity),
  [CITY_FETCH_QUERY]: options => get(api.onlyCity + options),
})
