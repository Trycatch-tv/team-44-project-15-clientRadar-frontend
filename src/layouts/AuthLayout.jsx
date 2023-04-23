import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

const AuthLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center" style={{height:"90vh"}}>
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default AuthLayout;
