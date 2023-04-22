import axiosClient from "./axiosClient";

const axiosInterceptor = () => {
  let token = localStorage.getItem("token");

  if (token) {
    axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosClient.defaults.headers.common["Authorization"];
  }
};
export default axiosInterceptor;
