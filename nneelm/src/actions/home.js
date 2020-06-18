import { get } from '@/utils/request'
import api from '@/services/api'

export function getNav (options) {
  return{
    type: 'HOME_HOOK_NAV',
    payload: get(api.nav),
  } 
}
export function getShop (options) {
  return{
    type: 'HOME_HOOK_SHOP',
    payload: get(api.shop),
  }
}
