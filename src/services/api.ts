import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2023",
  timeout: 5000,
});

export default api;
