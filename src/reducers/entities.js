import * as ActionTypes from 'actions/types'
import * as models from 'models'
import {normalize} from 'normalizr'


const initialState = {
  users: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LIST_USER__SUCCESS: {
      const {entities} = normalize(
        action.data,
        {
          users: [models.user],
        },
      )
      
      return {
        ...state,
        users: {
          ...state.users,
          ...entities.users,
        },
      }
    }
    case ActionTypes.LOGOUT__SUCCESS:
      return initialState
    default:
      return state
  }
}
