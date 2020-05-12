import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Authentication from './Authentication'

export default function App(){

  return(
    <Router>

        <Route exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />

        { console.log('Authentication.isAuthenticated :>> ', Authentication.isAuthenticated) }

    </Router>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (
    Authentication.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)