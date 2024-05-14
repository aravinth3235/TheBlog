import axios from "axios";
const URL = "http://localhost:8080";

export const url = {
  saveimg: (data) => {
    const response = axios.post(`${URL}/saveimg`, data);
    return response.data;
  },
};
