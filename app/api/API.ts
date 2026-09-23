import axios from "axios";
import endpoints from "./endpoints";

// create axios instance
const API = axios.create({
  baseURL: endpoints?.baseURL,
});

// a request interceptor is used to perform common operations on each request generated in the App
// to attach the access token to each request header interceptor can be used

API.interceptors.request.use((request) => {
  return request;
});

// response interceptors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
