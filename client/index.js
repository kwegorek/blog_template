import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from '../store/store'
import {Main} from './Main.js'
// import Routes from './routes.js'
import {Router, Route, Link, Switch} from 'react-router-dom'
import history from './history'
import PostLarge from './components/PostLarge'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="main-container">
        <Navbar/>
        <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/post/:id" component={PostLarge} />
        {/* <Route path="*" component={ErrorPage} /> */}
      </Switch>
      <Footer/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
)
