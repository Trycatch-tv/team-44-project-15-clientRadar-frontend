import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import jwtDecode from "jwt-decode";
import moment from "moment";

import { AuthContext } from "../context/AuthContext";

const useProtected = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/auth");
  }
  const decoded = jwtDecode(token);
  if (decoded.exp) {
    if (decoded?.exp && decoded.exp <= moment().unix()) {
      logout();
      navigate("/auth");
    }
  } else {
    logout();
    navigate("/auth");
  }
  return null;
};

export default useProtected;
