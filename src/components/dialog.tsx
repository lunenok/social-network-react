import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    id: number,
    name: string
};

export const Dialog: React.FC<PropsType> = ({id, name}) => {
    const path = "/dialogs/" + id;
    return (
        <div className="dialogs__item">
            <NavLink to={path}>
                {name}
            </NavLink>
        </div>
    );
};