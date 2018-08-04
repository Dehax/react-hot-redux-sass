import {combineReducers} from 'redux'

import alert from './alert'


const mainReducer = combineReducers({
  alert,
})

export default mainReducer
