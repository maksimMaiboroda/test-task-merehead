import { SET_USERS, USERS_LOADED } from "../types/types";

export const setUsers = (users) => ({ type: SET_USERS, users });
export const usersLoaded = () => ({ type: USERS_LOADED });
