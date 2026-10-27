/* eslint-disable no-unused-vars */

import axios from "axios";
// const LOCALHOST = "http://13.234.49.187:8080 || localhost:8080";
 const LOCALHOST = "http://localhost:8080";

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});
export const sendOtp = async (email) => {
  return axios.post(`${API_BASE_URL}/auth/forget`, { email });
};

export const verifyOtp = async (otp) => {
  return axios.post(`${API_BASE_URL}/auth/validating-otp`, { otp });
};

export const updatePassword = async (email, password, confirmPassword) => {
  return axios.post(`${API_BASE_URL}/auth/confirmpwd/${email}`, {
    password,
    confirmPassword,
  });
};

const token = localStorage.getItem("jwt");

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

api.defaults.headers.post["Content-Type"] = "application/json";

export default api;
