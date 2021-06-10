import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './auth-actions';

const user = createReducer({}, {
    [actions.registerSuccess]: (_, { payload }) => payload.user,
    [actions.loginSuccess]: (_, { payload }) => payload.user,
    [actions.logoutSuccess]: () => null,
    [actions.getUserSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
    [actions.registerSuccess]: (_, { payload }) => payload.token,
    [actions.loginSuccess]: (_, { payload }) => payload.token,
    [actions.logoutSuccess]: () => null,
    [actions.getUserSuccess]: (_, { payload }) => payload.token,
});
const error = createReducer(null, {
    [actions.registerError]: (_, { payload }) => payload,
    [actions.registerSuccess]: () => null,
    [actions.loginError]: (_, { payload }) => payload,
    [actions.loginSuccess]: () => null,
    [actions.logoutError]: (_, { payload }) => payload,
    [actions.logoutSuccess]: () => null,
});

const authReducer = combineReducers(
    {
        user, token, error
    }
);
export default authReducer;