import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import BrowserRouter from 'react-router-dom/BrowserRouter'


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            render={() => (<div>Hello</div>)}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

App.propTypes = {}
App.defaultProps = {}

export default App
