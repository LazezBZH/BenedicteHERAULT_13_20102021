import * as methods from "../constants/ActionsTypes";

export const login = (email, password, token) => ({
  method: methods.LOGIN,
  email,
  password,
  token,
});

export const logout = () => ({
  method: methods.LOGOUT,
});

export const editProfile = (firstName, lastName) => ({
  method: methods.EDIT_PROFILE,
  firstName,
  lastName,
});
