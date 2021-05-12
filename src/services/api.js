import axios from "axios";

const baseURL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  ? "http://localhost:8000/"
  : "http://catarco-api.herokuapp.com"

export const api = axios.create({
  baseURL: baseURL,
});

export const getSensorsData = api.get("sensors");
export const getActuatorsData = api.get("actuators");
export const updateActuatorsData = (actuator, value) => api.put("actuators/publish/", {
  "atuador_id": actuator,
  "estacao_id": 1,
  "valor": value
});

export default api;