import { createAction } from '@reduxjs/toolkit';

const signupUsersRequest = createAction('authorization/signupUsersRequest');
const signupUsersSuccess = createAction('authorization/signupUsersSuccess');
const signupUsersError = createAction('authorization/signupUsersError');

const loginUsersRequest = createAction('authorization/loginUsersRequest');
const loginUsersSuccess = createAction('authorization/loginUsersSuccess');
const loginUsersError = createAction('authorization/loginUsersError');

const logoutUsersRequest = createAction('authorization/logoutUsersRequest');
const logoutUsersSuccess = createAction('authorization/logoutUsersSuccess');
const logoutUsersError = createAction('authorization/logoutUsersError');

const currentUsersRequest = createAction('authorization/currentUsersRequest');
const currentUsersSuccess = createAction('authorization/currentUsersSuccess');
const currentUsersError = createAction('authorization/currentUsersError');


export const AuthorizationActions = {
    signupUsersRequest, signupUsersSuccess, signupUsersError,
    loginUsersRequest, loginUsersSuccess, loginUsersError,
    logoutUsersRequest, logoutUsersSuccess, logoutUsersError,
    currentUsersRequest, currentUsersSuccess, currentUsersError
}
