import { Loadable } from '@@'

export const Login = Loadable(() => import('@/pages/login'))
export const Home = Loadable(() => import('@/pages/home'))