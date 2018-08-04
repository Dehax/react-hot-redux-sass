import React from 'react'
import {hot} from 'react-hot-loader'
import {Provider} from 'react-redux'
import App from './App'

import store from '../store'


class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

Root.propTypes = {}
Root.defaultProps = {}

export default hot(module)(Root)
