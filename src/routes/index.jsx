import { Route, Switch } from 'react-router-dom'

import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'

export function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/cadastro" component={Cadastro}/>
    </Switch>
  )
}