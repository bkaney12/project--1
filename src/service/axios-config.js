import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const http_com = axios.create({
  baseURL: process.env.REACT_APP_COMMENT,
});
