import { Loadable } from '@@'

export const Login = Loadable(() => import('@/pages/login'))
export const City = Loadable(() => import('@/pages/city'))
export const Home = Loadable(() => import('@/pages/home'))
export const Search = Loadable(() => import('@/pages/search'))
export const OrderForm = Loadable(() => import('@/pages/orderForm'))
export const My = Loadable(() => import('@/pages/my'))
export const Shop = Loadable(() => import('@/pages/shop'))
export const QueryCity = Loadable(() => import('@/pages/queryCity'))
export const Basic = Loadable(() => import('@/layout/homeSwitch'))
