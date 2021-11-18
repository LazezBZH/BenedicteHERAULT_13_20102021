import { createAction } from "@reduxjs/toolkit";

export const loadUser = createAction("get-user");

export const loadUserSuccess = createAction("get-user-success", (user) => {
  return {
    payload: user,
  };
});

export const loadUserError = createAction("get-user-error", (error) => {
  return {
    payload: error,
  };
});
