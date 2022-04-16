import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import BookTicker from "../../common/BookTicker";
import Navbar from "../../common/Navbar";

export  const NavAndBookTicker=(props)=>{
  return <Route 
        exact
        path={props.path}
        render={(propsRoute)=>{
            return(
                <Fragment>
                    <Navbar/>
                    <props.component {...propsRoute}/>
                    <BookTicker/>
                </Fragment>
            )
        }}
  />;
}
