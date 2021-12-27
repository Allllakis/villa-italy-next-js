import React, { Fragment } from "react";
import MainHeader from "./main-header";

const Layout = (props) => {
  return (
    <Fragment>
      {/* <MainHeader /> */}
      <main>
          <MainHeader />
          {props.children}</main>
    </Fragment>
  );
};

export default Layout;