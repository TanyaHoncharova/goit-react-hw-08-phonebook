import axios from "axios";
import {AuthorizationActions} from './authorization-actions'


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signupUser = (credentials) => async dispatch => {
    dispatch(AuthorizationActions.signupUsersRequest())
    try {
        const { data } = await axios.post("/users/signup", credentials)
        token.set(data.token)
        dispatch(AuthorizationActions.signupUsersSuccess(data))
    } catch (error) {
        dispatch(AuthorizationActions.signupUsersError(error.message))
    };
};

const loginUser = (credentials) => async dispatch => {
    dispatch(AuthorizationActions.loginUsersRequest());
    try {
        const { data } = await axios.post("/users/login", credentials);
        token.set(data.token);
        dispatch(AuthorizationActions.loginUsersSuccess(data))
    } catch (error) {
        dispatch(AuthorizationActions.loginUsersError(error.message))
    };
  
};

const logoutUser = () => async dispatch => {
    dispatch(AuthorizationActions.logoutUsersRequest())
    try {
        await axios.post("/users/logout");
            token.unset();

        dispatch(AuthorizationActions.logoutUsersSuccess())
    } catch (error) {
        dispatch(AuthorizationActions.logoutUsersError(error.message))
    }
};

const getCurrentUser = () => async (dispatch, getState) => {

   const {
    authorization: { token: userToken },
     } = getState();
    
  if (!userToken) {
    return;
  }
  token.set(userToken);
  dispatch(AuthorizationActions.currentUsersRequest());
  try {
      const { data } = await axios.get('/users/current');
    dispatch(AuthorizationActions.currentUsersSuccess(data));
  } catch (error) {
    dispatch(AuthorizationActions.currentUsersError(error.message));
  }
};

export const AuthorizationOperations={signupUser, loginUser, logoutUser, getCurrentUser}