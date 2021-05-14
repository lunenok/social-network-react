import React from "react";

export const Posts: React.FC<PropsType> = React.memo((props) => {
    const text = props.text.text
    return (
        <li className="posts__item">{text}</li>
    );
});

type PropsType = {
    text: {text: string, id: number, likes: number;}
    key: number
};