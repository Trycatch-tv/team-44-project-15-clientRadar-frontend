import React, { createContext, useReducer } from "react";
import types from "./type";

export const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      return { ...state, auth: true, user: action.payload };
    case types.AUTH_LOGOUT:
      return { ...state, auth: false, user: {} };

    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const initialState = {
    auth: !!localStorage.getItem("token"),
    user: !!localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (payload) => dispatch({ type: types.AUTH_LOGIN, payload });

  const logout = () => dispatch({ type: types.AUTH_LOGOUT });

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
