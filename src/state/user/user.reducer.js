import UserActions from './user.actions';
import UserState from './user.data';

export default function userReducer(state = UserState, action) {
  switch (action.type) {
    case UserActions.LOGIN: {
      console.log("Hey Frands, Chai pilo");
      return state;
    }

    case UserActions.LOGIN_SUCCESS: {
      return {
        ...state,
        isUserAuthenticated: true
      };
    }

    case UserActions.LOGOUT_SUCCESS: {
      return {
        ...state,
        isUserAuthenticated: false
      };
    }

    default:
      return state;
  }
}
