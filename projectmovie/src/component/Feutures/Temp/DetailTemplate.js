import { Fragment } from "react";
import { Route } from "react-router-dom";

import Footer from "../../common/Footer";
import Header from "../../common/Header";
import InforOfMovieTheater from "../../../page/DetailPage/InforOfMovieTheater";

export const DetailTemplate = (props) => {
  return <Route 
  exact 
  path={props.path}
  render={(propsRoute)=>{
      return (
          <Fragment>
              <Header/>
              <props.component {...propsRoute}/>
              <InforOfMovieTheater/>
              <Footer/>
          </Fragment>
      )
  }}
  />;
};
