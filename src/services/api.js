import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const getSensorsDataFromAPI = api.get("sensors");
export const getActuatorsDataFromAPI = api.get("actuators");

export default api;