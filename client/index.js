import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from '../store/store'
import {Main} from './Main.js'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Main />
    </div>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
)
