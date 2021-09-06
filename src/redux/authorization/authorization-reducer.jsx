import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationActions } from './authorization-actions'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isGettingCurrentUser: false,
    error: null
};

const user = createReducer(initialState.user, {
    [AuthorizationActions.signupUsersSuccess]: (_, { payload }) => payload.user,
    [AuthorizationActions.loginUsersSuccess]: (_, { payload }) => payload.user,
    [AuthorizationActions.currentUsersSuccess]: (_, { payload }) => payload,
    [AuthorizationActions.logoutUsersSuccess]: () => initialState.user
});

const token = createReducer(initialState.token, {
    [AuthorizationActions.signupUsersSuccess]: (_, { payload }) => payload.token,
    [AuthorizationActions.loginUsersSuccess]: (_, { payload }) => payload.token,
    [AuthorizationActions.logoutUsersSuccess]: () => initialState.token
    
})

const isGettingCurrentUser = createReducer(initialState.isGettingCurrentUser, {
    [AuthorizationActions.currentUsersRequest]: () => true,
    [AuthorizationActions.currentUsersSuccess]: () => false,
})

const error = createReducer(initialState.error, {
    [AuthorizationActions.signupUsersRequest]: () => null,
    [AuthorizationActions.signupUsersSuccess]: () => null,
    [AuthorizationActions.signupUsersError]: (_, { payload }) => payload,
    [AuthorizationActions.loginUsersRequest]: () => null,
    [AuthorizationActions.loginUsersSuccess]: () => null,
    [AuthorizationActions.loginUsersError]: (_, { payload }) => payload,
    [AuthorizationActions.logoutUsersRequest]: () => null,
    [AuthorizationActions.logoutUsersSuccess]: () => null,
    [AuthorizationActions.logoutUsersError]: (_, { payload }) => payload,
    [AuthorizationActions.currentUsersRequest]: () => null,
    [AuthorizationActions.currentUsersSuccess]: () => null,
    [AuthorizationActions.currentUsersError]: (_, { payload }) => payload,
    
});


export default combineReducers({
    user,
    token,
    isGettingCurrentUser,
    error
});