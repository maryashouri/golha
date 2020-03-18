import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/index.scss'

const Users = React.lazy(() => import('./pages/Users'))
const User = React.lazy(() => import('./pages/User'))
const Home = React.lazy(() => import('./pages/Home'))


export default class App extends Component {
  render() {
  
    return (
      <Router>
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Route exact path="/" component={Home} />
          <Route static path="/users" component={Users} />
          <Route static path="/users/:id" component={User} />
        </Suspense>
      </Router>
    )
  }
}