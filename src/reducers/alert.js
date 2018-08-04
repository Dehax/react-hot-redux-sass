import * as ActionTypes from '../actions/types'


const initialState = {
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ALERT__REQUEST:
    case ActionTypes.ALERT__SUCCESS:
      return initialState
    case ActionTypes.ALERT__FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
