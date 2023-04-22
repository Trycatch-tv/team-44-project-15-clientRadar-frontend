import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
