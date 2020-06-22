import { createActions } from 'redux-actions'
import { CITY_FETCH_HOT, CITY_FETCH_ALL } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export default createActions({
  [CITY_FETCH_HOT]: () => get(api.hotCity),
  [CITY_FETCH_ALL]: () => get(api.allCity),
})

