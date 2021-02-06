import {store} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                updatePostText={store.updatePostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);