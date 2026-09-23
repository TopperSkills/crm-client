import * as React from "react";
import { Outlet } from "react-router";

interface IAdminLayoutProps {}

const AdminLayout: React.FunctionComponent<IAdminLayoutProps> = (props) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminLayout;
