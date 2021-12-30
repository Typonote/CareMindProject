import axios from "axios";

const BASE_URL = "http://localhost:3000";

function Request_Login(endpoint, data) {
  return axios.post(BASE_URL + endpoint, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const AuthApi = {
  Request_Login,
};
