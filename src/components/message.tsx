import React from "react";

type PropsType = {
    id: number,
    message: string,
};

export const Message: React.FC<PropsType> = ({id, message}) => {
    return (
        <div key = {id} className="message">{message}</div>
    )
}