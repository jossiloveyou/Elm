import { createActions } from 'redux-actions'
import { SHOP_FETCH_FOOD } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export default createActions({
  [SHOP_FETCH_FOOD]: options => get(api.menu + options),
})