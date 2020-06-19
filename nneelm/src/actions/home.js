import { createActions } from 'redux-actions'
import { HOME_FETCH_NAV, HOME_FETCH_SHOP } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export default createActions({
  [HOME_FETCH_NAV]: () => get(api.nav),
  [HOME_FETCH_SHOP]: () => get(api.shop),
})
