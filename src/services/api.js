import axios from "axios";

const baseURL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  ? "http://localhost:8000/"
  : "http://catarco-api.herokuapp.com"

export const api = axios.create({
  baseURL: baseURL,
});

export const getSensorsDataFromAPI = api.get("sensors");

export default api;