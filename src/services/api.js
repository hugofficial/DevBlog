import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.3:1337/api",
});

export default api;
