import React from "react";

type PropsType = {
    text: any
};

export const Posts: React.FC<PropsType> = React.memo((props) => {
    const {text} = props.text;
    return (
        <li className="posts__item">{text}</li>
    );
});
