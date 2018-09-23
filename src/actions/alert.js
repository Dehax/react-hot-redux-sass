import httpStatus from 'http-status'
import * as accountActions from './account'
import * as ActionTypes from './types'


export const error = (err) => {
  return async (dispatch) => {
    const errObj = {}
    
    if (err.response) {
      const {
        status,
        statusText,
        data,
      } = err.response
      
      if (status === httpStatus.UNAUTHORIZED) {
        await dispatch(accountActions.logout())
        return
      }
      
      console.debug('Server error', err.response)
      
      let message = statusText
      
      if (typeof data === 'string') {
        message = data
      } else if (typeof data === 'object') {
        message = data.message
      }
      
      errObj.code = status
      errObj.message = message
    } else if (err.request) {
      errObj.code = -1
      errObj.message = `Request error (${err.message}). Please, check your network connection and try again.`
    } else {
      errObj.code = -2
      errObj.message = `Application error (${err.message}). Please, reload the page and contact the developer.`
    }
    
    await dispatch({
      type: ActionTypes.ALERT__FAILURE,
      error: errObj,
    })
  }
}

export const request = () => ({
  type: ActionTypes.ALERT__REQUEST,
})
