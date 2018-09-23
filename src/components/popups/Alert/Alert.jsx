import IconButton from '@material-ui/core/IconButton/IconButton'
import Snackbar from '@material-ui/core/Snackbar/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent/SnackbarContent'
import withStyles from '@material-ui/core/styles/withStyles'
import Close from '@material-ui/icons/Close'
import Error from '@material-ui/icons/Error'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import * as selectors from 'selectors/alert'
import * as types from 'types'


const styles = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

class Alert extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      open: false,
      lastError: null,
    }
    
    this.handleClose = this.handleClose.bind(this)
  }
  
  static getDerivedStateFromProps (props, state) {
    const {
      error,
    } = props
    
    const {
      lastError,
    } = state
    
    if (error !== lastError) {
      return {
        open: !!error,
        lastError: error,
      }
    }
    
    return null
  }
  
  handleClose (event, reason) {
    if (reason === 'clickaway') {
      return
    }
    
    this.setState({
      open: false,
    })
  }
  
  render () {
    const {
      open,
    } = this.state
    
    const {
      classes,
      error,
    } = this.props
    
    return (
      <Snackbar
        key={Date.now()}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <SnackbarContent
          className={classes.error}
          aria-describedby="message-id"
          message={
            <span
              id="message-id"
              className={classes.message}
            >
              <Error className={classNames(classes.icon, classes.iconVariant)} />
              {error && error.message}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <Close className={classes.icon} />
            </IconButton>,
          ]}
        />
      </Snackbar>
    )
  }
}

Alert.propTypes = {
  classes: PropTypes.object.isRequired,
  error: types.errorType,
}
Alert.defaultProps = {
  error: null,
}

const mapStateToProps = state => ({
  error: selectors.getErrorObject(state),
})

export default connect(mapStateToProps)(withStyles(styles)(Alert))
