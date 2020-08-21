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
};
/* 
export const profileAPI = {
  getProfile(userId) {
    return instanse.get(`profile/${userId}`).then((response) => response.data);
  },

  getStatus(userId) {
    return instanse.get("profile/status/" + userId);
  },

  updateStatus(status) {
    return instanse.put("profile/status", { status: status });
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instanse.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile) {
    return instanse.put("profile", profile);
  },
};

export const authAPI = {
  me() {
    return instanse.get("auth/me").then((response) => response.data);
  },

  login({ email, password, rememberMe, captcha = null }) {
    return instanse.post("auth/login", {
      email,
      password,
      rememberMe,
      captcha,
    });
  },

  logout() {
    return instanse.delete("auth/login", { data: {} });
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instanse.get("security/get-captcha-url");
  },
};
 */
