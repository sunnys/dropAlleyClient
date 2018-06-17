import { combineReducers } from 'redux';
import { values } from 'lodash';
import { combineEpics } from 'redux-observable';

import UserReducer from './user/user.reducer';
import themeReducer from './../reducers/theme.reducer';
import layoutReducer from './../reducers/layout.reducer';

import * as UserEpics from './user/user.epics';

export const IndexReducer = combineReducers({
    users: UserReducer,
    theme: themeReducer,
    layout: layoutReducer
});

export const IndexEpics = combineEpics(
    ...[...values(UserEpics)],
);
