import { userAPI } from "../../api/api";
import { SET_USERS, USERS_LOADED } from "../types/types";

export const setUsers = (users) => ({ type: SET_USERS, users });
export const usersLoaded = () => ({ type: USERS_LOADED });

export const requestUsers = () => {
  return async (dispatch) => {
    let data = await userAPI.getUsers();
    dispatch(setUsers(data));
    dispatch(usersLoaded());
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    await userAPI.addUser(user);
  };
};

export const userDelete = (id) => {
  return async (dispatch) => {
    await userAPI.userDel(id);
  };
};
