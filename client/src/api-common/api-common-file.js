import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const signUpApi = (payload) => {
  const result = axios.post(BASE_URL + "/register", payload);
  return result;
};

export const loginApi = (payload) => {
  const result = axios.post(BASE_URL + "/login", payload);
  return result;
};
