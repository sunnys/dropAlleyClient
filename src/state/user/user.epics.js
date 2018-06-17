import { Observable } from 'rxjs';

import UserApi from './user.api';
import UserActions from './user.actions';
import {
  loginSuccess,
  logoutSuccess,
  logoutError,
  loginError
} from './user.creators';

import config from '../../api/config.json';

export const loginEpic = action$ =>
  action$.ofType(UserActions.LOGIN).switchMap(({ payload }) =>
    Observable.fromPromise(UserApi.login(payload))
      .map(({ data: { meta: { token } } }) => {
        window.localStorage.setItem(config.bearerTokenKey, token);
        return loginSuccess();
      })
      .catch(() => Observable.of(loginError()))
  );

export const logoutEpic = action$ =>
  action$.ofType(UserActions.LOGOUT).switchMap(() =>
    Observable.fromPromise(UserApi.logout())
      .map(() => {
        window.localStorage.removeItem(config.bearerTokenKey);
        return logoutSuccess();
      })
      .catch(() => Observable.of(logoutError()))
  );
