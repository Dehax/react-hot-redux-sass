import axios from 'axios'
import 'components/index.css'
import Root from 'components/Root'
import React from 'react'
import ReactDOM from 'react-dom'


axios.defaults.baseURL = process.env.REACT_APP_HOST_API

ReactDOM.render(<Root />, document.getElementById('root'))
