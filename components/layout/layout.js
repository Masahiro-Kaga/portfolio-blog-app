import React, { Fragment } from "react";
import MainNavigation from "./main-navigation";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main css={mainpart}>{props.children}</main>
    </Fragment>
  );
};

const mainpart = css`
  position:relative;
  top:150px
`

export default Layout;
