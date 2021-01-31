import {NavLink} from "react-router-dom";
import React from "react";

export const Dialog = (props) => {
    const {id, name} = props;
    const path = "/dialogs/" + id;
    return (
        <div className="dialogs__item">
            <NavLink to={path}>
                {name}
            </NavLink>
        </div>
    );
};