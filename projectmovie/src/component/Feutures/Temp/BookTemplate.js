import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";

import Footer from "../../common/Footer";
import HeaDer from "../../common/Header";

const BookTemplate = (props) => {
  const ktLogin = localStorage.getItem("accessToken");
  console.log();
  if (!ktLogin) return <Redirect to="/login" />;
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
              <HeaDer/>
            <props.component {...propsRoute} />
            <Footer/>
          </Fragment>
        );
      }}
    />
  );
};
export default BookTemplate