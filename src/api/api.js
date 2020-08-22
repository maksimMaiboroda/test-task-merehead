import * as axios from "axios";

const instanse = axios.create({
  baseURL: `http://77.120.241.80:8911/api/`,
});

export const userAPI = {
  getUsers() {
    return instanse.get(`users`).then((response) => response.data);
  },

  addUser(user) {
    return instanse.post(`users`, user);
  },

  userDel(id) {
    return instanse.delete(`user/${id}`);
  },

  updateUser(id, data) {
    return instanse.put(`user/${id}`, data);
  },
};
