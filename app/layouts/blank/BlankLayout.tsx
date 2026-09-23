import * as React from "react";
import { Outlet } from "react-router";

interface IBlankLayoutProps {}

const BlankLayout: React.FunctionComponent<IBlankLayoutProps> = (props) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default BlankLayout;
