import Axios from "axios";
import { configure } from "axios-hooks";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4210/api/v1",
});

// axiosConfig.interceptors.request.use(function (config) {
//   config.headers.authorization = `Bearer ${localStorage.getItem("AUTH_TOKEN")}`;
//   return config;
// }, null);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response);
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = "/login";
      } else {
        return Promise.reject({
          ...error.response.data,
          status: error.response.status,
        });
      }
    } else {
      return Promise.reject({
        ...error,
        status: error.code === "ERR_CANCELED" ? 0 : 1,
      });
    }
  }
);

configure({ axios });

export default axios;
