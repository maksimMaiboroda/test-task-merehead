import { userAPI } from "../../api/api";
import { SET_USERS, USERS_LOADED } from "../types/types";
import { setUsers, usersLoaded } from "../actions/actions";

let initialState = {
  users: [],
  usersLoaded: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }

    case USERS_LOADED: {
      return { ...state, usersLoaded: true };
    }

    default:
      return state;
  }
};

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
    /* requestUsers(); */
  };
};

export const userDelete = (id) => {
  return async (dispatch) => {
    await userAPI.userDel(id);
    /* requestUsers(); */
  };
};

export default usersReducer;
