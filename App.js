import AppBar from './components/AppBar/AppBar';
import { lazy, Suspense, useEffect, } from 'react';
import {useDispatch} from 'react-redux'
import { Switch,Redirect  } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivteRoute.jsx'
import PublicRoute from './components/Routes/PublicRoute.jsx'
import Loader from './components/Loader';
import { AuthorizationOperations, AuthorizationSelectors } from './redux/authorization'
import { useSelector } from 'react-redux';


const RegisterView = lazy(() => import('./views/RegisterView' /* webpackChunkName: "register-view" */));
const LoginView = lazy(() => import('./views/LoginView' /* webpackChunkName: "login-view" */));
const ContactsView = lazy(() => import('./views/ContactsView' /* webpackChunkName: "contacts-view" */));


function App() {
  const dispatch = useDispatch();
  const isGettingCurrentUser = useSelector(AuthorizationSelectors.isGettingCurrentUser);

  useEffect(() => {
    dispatch(AuthorizationOperations.getCurrentUser())
  }, [dispatch]);

  return (
    !isGettingCurrentUser&&<div>
      <AppBar />

      <Suspense fallback={<Loader/>}>
        <Switch>
          <PublicRoute path="/register" exact restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path='/login' exact restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute  path='/contacts' exact>
            <ContactsView />
          </PrivateRoute>

          <Redirect to="/login" />

        </Switch>

      </Suspense>
      
    </div>
  );
}

export default App;
