import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Alert from 'components/popups/Alert/Alert'
import React from 'react'
import PageRouter from 'routers/PageRouter'
import Light from 'themes/Light'


class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider theme={Light}>
        <CssBaseline />
        <PageRouter />
        <Alert />
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {}
App.defaultProps = {}

export default App
