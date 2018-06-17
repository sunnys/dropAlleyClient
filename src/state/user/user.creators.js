import { createAction } from 'redux-actions';
import UserActions from './user.actions';

export const login = createAction(UserActions.LOGIN);

export const loginSuccess = createAction(UserActions.LOGIN_SUCCESS);

export const loginError = createAction(UserActions.LOGIN_ERROR);

export const logout = createAction(UserActions.LOGOUT);

export const logoutSuccess = createAction(UserActions.LOGOUT_SUCCESS);

export const logoutError = createAction(UserActions.LOGOUT_ERROR);
