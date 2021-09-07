import React from "react";

export const Message: React.FC<PropsType> = ({id, message}) => {
    return (
        <div key = {id} style={{marginBottom: '6px'}}>
            <span style={{color: 'gray'}}>msg#{id}: </span>
            {message}
        </div>
    )
}


type PropsType = {
    id: number;
    message: string;
};