import React from 'react'
import error from '../Files/error.png'
import { Link } from 'react-router-dom'
import { Hidden, Typography } from '@material-ui/core'
import './Error.css'
export const Error = () => {
    return (
        <div>
            <Hidden only={"xs"}>
            <img className="errorimage" src={error}/>
            <div>
                <h3 className="maintext">
                    Your session has been ended please login in again
                </h3>
                <Link to="/">
                <h4  className="linktext">
                    Click here to signin again
                </h4>
                </Link>
            </div>
            </Hidden>
            <Hidden only={["lg","md","sm","xl"]}>
            <img className="errorimagephone" src={error}/>
            <div>
            <h5 className="maintextphone">
                    Your session has been ended please login in again
                    </h5>
                    <Link to="/">
                    <h6  className="linktextphone">
                    Click here to signin again
                    </h6></Link>
            </div>
            </Hidden>
        </div>
    )
}
