
import { Route } from "react-router-dom"
import { Fragment } from "react"


export const UserTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <div className="row">
                <div className="col-5">
                    <img className="img-fluid" src="https://source.unsplash.com/1600x900/" alt="" />
                </div>
                <div className="col-7">
                    <props.component {...propsRoute} />
                </div>
            </div>

        </Fragment>
    }} />
}