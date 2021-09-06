import { useSelector } from 'react-redux';
import { AuthorizationSelectors } from '../../redux/authorization';
import { Route, Redirect } from 'react-router-dom';


export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
  ...routeProps
}) {
  const isLoggedIn = useSelector(AuthorizationSelectors.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
