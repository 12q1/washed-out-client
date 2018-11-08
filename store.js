import { createStore, combineReducers } from 'redux'
import reducers from './reducers'

const reducer = combineReducers(Object.assign({}, reducers))

const store = createStore(reducer)

export default store