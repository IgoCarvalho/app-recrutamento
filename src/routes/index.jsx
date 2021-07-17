import { Redirect, Switch } from 'react-router-dom'

import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import CustomRoute from './CustomRoute'

export function Routes() {

  return (
    <Switch>
      <CustomRoute privated exact path="/">
        <Redirect to="/dashboard" />
      </CustomRoute>
      <CustomRoute privated path="/dashboard">
        <Dashboard />
      </CustomRoute>
      <CustomRoute path="/login">
        <Login />
      </CustomRoute>
      <CustomRoute path="/cadastro">
        <Cadastro />
      </CustomRoute>
    </Switch>
  )
}