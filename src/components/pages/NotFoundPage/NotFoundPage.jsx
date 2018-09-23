// import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography/Typography'
import * as strings from 'languages/en'
import React from 'react'


class NotFoundPage extends React.Component {
  render () {
    return (
      <div>
        <Typography
          variant="display1"
          noWrap
        >
          {strings.NOT_FOUND_LABEL}
        </Typography>
      </div>
    )
  }
}

NotFoundPage.propTypes = {}
NotFoundPage.defaultProps = {}

export default NotFoundPage
