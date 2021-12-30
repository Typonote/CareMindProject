const BASE_URL = "http://localhost:3000";

function Request_Login(endpoint, data) {
  return fetch(BASE_URL + endpoint, data, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const AuthApi = {
  Request_Login,
};
