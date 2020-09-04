import { userAPI } from "../../api/api";
import { SET_USERS, USERS_LOADED } from "../types/types";

export const setUsers = (users) => ({ type: SET_USERS, users });
export const usersLoaded = (statusLoaded) => ({ type: USERS_LOADED, payload: statusLoaded });

export const requestUsers = () => {
  return async (dispatch) => {
    dispatch(usersLoaded(true));
    let data = await userAPI.getUsers();
    dispatch(setUsers(data));
    dispatch(usersLoaded(false));
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

export const userChange = (id, data) => {
  return async (dispatch) => {
    await userAPI.updateUser(id, data);
  };
};
