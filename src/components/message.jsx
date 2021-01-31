import React from "react";

export const Message = (props) => {
    const {id, message} = props;
    return (
        <div key = {id} className="message">{message}</div>
    )
}