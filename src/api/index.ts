import axios from "axios";

export const api = axios.create({
  baseURL: "https://fahimx.pythonanywhere.com/api/",
  timeout: 1000,
});
