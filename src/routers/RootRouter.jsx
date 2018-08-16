import React from 'react'
// import PropTypes from 'prop-types'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import NotFound from '../components/NotFound'


class RootRouter extends React.Component {
  render () {
    return (
      <Switch>
        <Route component={NotFound} />
      </Switch>
    )
  }
}

RootRouter.propTypes = {}
RootRouter.defaultProps = {}

export default RootRouter
