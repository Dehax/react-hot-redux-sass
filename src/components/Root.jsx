import App from 'components/App/App'
import React from 'react'
import {hot} from 'react-hot-loader'
import {Provider} from 'react-redux'
import BrowserRouter from 'react-router-dom/BrowserRouter'

import store from 'store'


class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  }
}

Root.propTypes = {}
Root.defaultProps = {}

export default hot(module)(Root)
