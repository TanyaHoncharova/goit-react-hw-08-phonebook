import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { AuthorizationSelectors } from '../../redux/authorization';

export default function PrivateRoute({
  children,
  redirectTo = '/login',
  ...routeProps
}) {
    const isLoggedIn = useSelector(AuthorizationSelectors.isLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}