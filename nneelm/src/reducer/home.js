import {} from '@/constants/actionTypes'
const defaultState = {
  datas: [],
  shop:[]
}

export default function home (state = defaultState, action) {
  switch (action.type) {
    case 'HOME_HOOK_NAV':
      return {...state, datas: action.payload}
    case 'HOME_HOOK_SHOP':
      return {...state, shop: action.payload}
    default:
      return state
  }
}

