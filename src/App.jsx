import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";

import NotFoundPage from "./pages/NotFoundPage";
import RolePage from "./pages/RolePage";
import UserPage from "./pages/UserPage";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SellPage from "./pages/SellPage";

const App = () => {
  return (
    <React.Fragment>
      {/* <BrowserRouter basename="/team-44-project-15-clientRadar-frontend"> */}
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="/app/role" />} />
            <Route path="role" element={<RolePage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="sell" element={<SellPage />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="/auth/login" />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
