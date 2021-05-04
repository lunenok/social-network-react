import {NavLink} from "react-router-dom";
import React from "react";

export const Dialog = ({id, name}) => {
    const path = "/dialogs/" + id;
    return (
        <div className="dialogs__item">
            <NavLink to={path}>
                {name}
            </NavLink>
        </div>
    );
};