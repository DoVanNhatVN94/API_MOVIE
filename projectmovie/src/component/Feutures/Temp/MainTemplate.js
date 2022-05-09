import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { checkLogin, history } from "../../../App";

import Footer from "../../common/Footer";
import HeaDer from "../../common/Header";

export const MainTemplate = (props) => {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <HeaDer />
            <props.component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
