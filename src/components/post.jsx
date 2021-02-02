import React from "react";

export const Posts = (props) => {
    const {text} = props.text;
    return (
        <li className="posts__item">{text}</li>
    );
};
