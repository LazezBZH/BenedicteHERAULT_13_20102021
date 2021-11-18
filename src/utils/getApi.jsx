import axios from "axios";
import {
  editUser,
  editUserError,
  editUserSuccess,
} from "../Redux/actions/editUser";
import {
  loadToken,
  loadTokenError,
  loadTokenSuccess,
} from "../Redux/actions/getToken";
import {
  loadUser,
  loadUserError,
  loadUserSuccess,
} from "../Redux/actions/getUser";
import baseUrl from "./baseUrl";

axios.defaults.baseURL = baseUrl;

export const getToken = (email, password) => {
  return (dispatch) => {
    dispatch(loadToken());
    axios
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        dispatch(loadTokenSuccess(response.data.body.token));
        localStorage.setItem("token", response.data.body.token);
        const token = localStorage.getItem("token");
        dispatch(getUser(token));
      })
      .catch((error) => {
        dispatch(loadTokenError(error.message));
      });
  };
};

export const getUser = (token) => {
  return (dispatch) => {
    dispatch(loadUser());
    axios({
      method: "POST",
      url: "/profile",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(loadUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadUserError(error.message));
      });
  };
};

export const editUsers = (firstName, lastName) => {
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(editUser());
    axios({
      method: "PUT",
      url: "/profile",
      headers: { Authorization: `Bearer ${token}` },
      data: {
        firstName,
        lastName,
      },
    })
      .then((response) => {
        dispatch(editUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(editUserError(error.message));
      });
  };
};
