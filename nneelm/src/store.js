import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage' 
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { login, home, city, queryCity, shop } from '@/reducer'

const rootPersistConfig = {
  key: 'auto',
  storage,
  stateReconciler:autoMergeLevel2,
  whitelist: ['login'],
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const myPersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    login,
    home,
    city,
    shop,
    queryCity,
  })
)
const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(promise,thunk))
)

export default store