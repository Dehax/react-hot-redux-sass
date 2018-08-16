import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import RootRouter from '../routers/RootRouter'


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    )
  }
}

App.propTypes = {}
App.defaultProps = {}

export default App
