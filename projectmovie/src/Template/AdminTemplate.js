import { Route } from "react-router-dom";
import { Fragment, React } from "react";

export const AdminTemplate = (props) => {

    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <div className="row">
                <div className="col-2 text-center">
                    <h2 className="mt-5">Navbar</h2>
                </div>
                <div className="col-10">
                    <props.component {...propsRoute} />
                </div>
            </div>
        </Fragment>
    }} />
}




