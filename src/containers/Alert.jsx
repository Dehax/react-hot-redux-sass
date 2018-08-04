import React from 'react'
import {connect} from 'react-redux'
import * as types from '../types'
import * as selectors from '../selectors'


class Alert extends React.Component {
  render () {
    const {error} = this.props
    
    if (!error) {
      return null
    }
    
    return (
      <div>
        {error.message}
      </div>
    )
  }
}

Alert.propTypes = {
  error: types.errorType,
}
Alert.defaultProps = {
  error: null,
}

const mapStateToProps = state => ({
  error: selectors.getErrorObject(state),
})

export default connect(mapStateToProps)(Alert)
