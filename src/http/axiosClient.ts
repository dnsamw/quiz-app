import axios from "axios";
import { BACKEND_API_ENDPOINT } from "./endpoints";

// const request_url = window.location.href;

const axiosConfig = {
    baseURL: BACKEND_API_ENDPOINT,
    headers: {
    //   "Content-Type": "application/json",
    },
  };

  export const axiosClient = axios.create(axiosConfig);