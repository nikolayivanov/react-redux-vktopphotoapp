//document.getElementById('root').innerHTML = 'Привет, я готов к работе.'
//module.hot.accept()

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'


render(
  <App />,
  document.getElementById('root')
)