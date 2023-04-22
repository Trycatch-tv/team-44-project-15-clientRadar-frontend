import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import NotFoundPage from "./pages/NotFoundPage";
import RolePage from "./pages/RolePage";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="/app/role" />} />
            <Route path="role" element={<RolePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
