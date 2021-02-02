import {subscribe, state, addPost, updatePostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(state);

subscribe(renderEntireTree);