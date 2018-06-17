import { createSelector } from 'reselect';

const getLocalState = state => state.users;

export const getUser = () => createSelector(getLocalState, users => users);

export const isUserAuthenticated = () =>
  createSelector(
    getLocalState,
    ({ isUserAuthenticated }) => isUserAuthenticated
  );
