import { createAction } from "@reduxjs/toolkit";

export const editUser = createAction("edit-user");

export const editUserSuccess = createAction("edit-user-success", (user) => {
  return {
    payload: user,
  };
});

export const editUserError = createAction("edit-user-error", (error) => {
  return {
    payload: error,
  };
});
