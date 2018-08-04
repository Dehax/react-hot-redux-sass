import * as ActionTypes from './types'


export const error = (err) => {
  return async (dispatch) => {
    const errObj = {}
    
    if (err.response) {
      console.error('Server error', err.response)
      const {status} = err.response
      const message = typeof err.response.data === 'string' ? err.response.data : err.response.statusText
      errObj.code = status
      errObj.message = message
    } else if (err.request) {
      errObj.code = -1
      errObj.message = `Request error (${err.message}). Please, reload the page.`
    } else {
      errObj.code = -2
      errObj.message = `Application error (${err.message}). Please, reload the page.`
    }
    
    dispatch({
      type: ActionTypes.ALERT__FAILURE,
      error: errObj,
    })
  }
}

export const request = () => {
  return {
    type: ActionTypes.ALERT__REQUEST,
  }
}
