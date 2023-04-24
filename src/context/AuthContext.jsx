import React, { createContext, useReducer } from "react";
import types from "./type";

export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      return {
        ...state,
        auth: true,
        user: action.payload.user,
        role: action.payload.role,
      };
    case types.AUTH_LOGOUT:
      return { ...state, auth: false, user: {}, role: {} };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const initialState = {
    auth: !!localStorage.getItem("token"),
    user: !!localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},
    role: !!localStorage.getItem("role")
      ? JSON.parse(localStorage.getItem("role"))
      : {},
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (token, user, role) => {
    if (localStorage.getItem("token")) localStorage.removeItem("token");
    if (localStorage.getItem("user")) localStorage.removeItem("user");
    if (localStorage.getItem("role")) localStorage.removeItem("role");

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("role", JSON.stringify(role));

    dispatch({ type: types.AUTH_LOGIN, payload: { user, role } });
  };

  const logout = () => {
    if (localStorage.getItem("token")) localStorage.removeItem("token");
    if (localStorage.getItem("user")) localStorage.removeItem("user");
    if (localStorage.getItem("role")) localStorage.removeItem("role");
    dispatch({ type: types.AUTH_LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
