import axios from "axios";
import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  USER_LOGOUT,
} from "../constants";

export const getUserInfo = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });

    const { data } = await axios.post("/api/user/login", { email, password });
    dispatch({ type: GET_USER_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: GET_USER_FAILED, payload: error });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
