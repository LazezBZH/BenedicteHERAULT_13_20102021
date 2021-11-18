import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

import accountData from "../../../data/accountData";
import Account from "../../components/Account/Account";

import { editUsers } from "../../../utils/getApi";

const User = () => {
  const [editName, setEditName] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const selectUser = (state) => state.getUser.user.body;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log(user);

  if (user === undefined) {
    return <Navigate to="/" />;
  }
  const firstName = user.firstName;
  const lastName = user.lastName;

  const edit = () => {
    dispatch(editUsers(newFirstName, newLastName));
    setEditName(false);
  };
  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}
          </h1>
        </div>
        {editName ? (
          <div>
            <input
              className="edit-button"
              type="button"
              onClick={() => {
                setEditName(true);
              }}
              value="Edit Name"
            />
            <input
              className="edit-input"
              value={newFirstName}
              placeholder={firstName}
              type="text"
              onChange={(e) => {
                setNewFirstName(e.target.value);
              }}
            />
            <input
              className="edit-input"
              value={newLastName}
              placeholder={lastName}
              type="text"
              onChange={(e) => {
                setNewLastName(e.target.value);
              }}
            />
            <button
              className="edit-button"
              type="submit"
              value="Save"
              onClick={edit}
            >
              Save
            </button>

            <button
              className="edit-button"
              type="button"
              value="Cancel"
              onClick={() => {
                setEditName(false);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <input
            className="edit-button"
            type="button"
            onClick={() => {
              setEditName(true);
            }}
            value="Edit Name"
          />
        )}
      </main>

      <h3 className="sr-only">Accounts</h3>

      {accountData.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </>
  );
};

export default User;
