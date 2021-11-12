import { IS_LOGGED_OUT } from "../constants/Status";
import { LOGIN, LOGOUT, EDIT_PROFILE } from "../constants/ActionTypes";

export default function reducers(state = IS_LOGGED_OUT, action) {
  switch (action.method) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
        loggged: true,
        token: action.token,
      };
    case LOGOUT:
      return IS_LOGGED_OUT;
    case EDIT_PROFILE:
      return {
        ...state,
        firstName: action.firstName ? action.firstName : state.firstName,
        lastName: action.firstName ? action.lastName : state.lastName,
      };
    default:
      return state;
  }
}
