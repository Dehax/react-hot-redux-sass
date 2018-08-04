import {createSelector} from 'reselect'


const getError = state => state.alert.error

export const getErrorObject = createSelector(
  [getError],
  error => error,
)
