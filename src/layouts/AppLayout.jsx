import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default AppLayout;
