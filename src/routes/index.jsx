import { Redirect, Route, Switch } from 'react-router-dom'

import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

export function Routes() {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
    </Switch>
  )
}