import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/ui/Navbar";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-3">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
