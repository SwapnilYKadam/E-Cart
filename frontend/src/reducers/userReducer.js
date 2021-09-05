import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  USER_LOGOUT,
} from "../constants";

export const authorizeUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { user: {}, loading: true };
    case GET_USER_SUCCESS:
      return { user: action.payload, loading: false };
    case GET_USER_FAILED:
      return { error: action.payload, loading: false };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
