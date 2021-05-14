import React from "react";

export const Message: React.FC<PropsType> = ({id, message}) => {
    return (
        <div key = {id} className="message">{message}</div>
    )
}


type PropsType = {
    id: number;
    message: string;
};