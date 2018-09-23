import reducer from 'reducers'
import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'


const logger = createLogger({
  collapsed: true,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger)),
)

export default store
