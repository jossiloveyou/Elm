import { createActions } from 'redux-actions'
import { CITY_FETCH_QUERY } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export default createActions({
  [CITY_FETCH_QUERY]: options => get(api.onlyCity + options),
})

