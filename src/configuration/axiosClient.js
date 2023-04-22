import axios from "axios";
import environment from "./environment";

const axiosClient = axios.create({
  baseURL: environment.server.baseUrl,
});

export default axiosClient;
