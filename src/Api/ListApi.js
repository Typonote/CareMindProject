import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1/coins";

function Get_List(endpoint) {
  return axios.get(BASE_URL + endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const ListApi = {
  Get_List,
};
