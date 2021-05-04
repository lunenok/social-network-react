import React from "react";

export const Posts = React.memo((props) => {
    const {text} = props.text;
    return (
        <li className="posts__item">{text}</li>
    );
});
