import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './components/index.css'

import Root from './components/Root'


axios.defaults.baseURL = process.env.REACT_APP_HOST_API

ReactDOM.render(<Root />, document.getElementById('root'))
