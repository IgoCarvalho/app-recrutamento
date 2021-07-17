import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function CustomRoute({ privated, children, ...rest }) {
  const { user } = useContext(AuthContext);

  console.log(user);

  if (privated) {
    return user ? (
      <Route {...rest}>
        {children}
      </Route>
    ) : (
      <Redirect to="/login" />
    );
  }

  return user ? (
    <Redirect to="/dashboard" />
  ) : (
    <Route {...rest}>
      {children}
    </Route>
  );
}

export default CustomRoute;
