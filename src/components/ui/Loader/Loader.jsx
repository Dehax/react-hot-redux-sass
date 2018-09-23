import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'
import Typography from '@material-ui/core/Typography/Typography'
import classNames from 'classnames'
import * as strings from 'languages/en'
import PropTypes from 'prop-types'
import React from 'react'

import './Loader.css'


class Loader extends React.Component {
  render () {
    const {
      className,
    } = this.props
    
    return (
      <div className={classNames('Loader', className)}>
        <Typography
          gutterBottom
        >
          {strings.LOADING}
        </Typography>
        <div className="Progress">
          <CircularProgress color="secondary" />
        </div>
      </div>
    )
  }
}

Loader.propTypes = {
  className: PropTypes.string,
}
Loader.defaultProps = {
  className: '',
}

export default Loader
