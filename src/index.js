import {store} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);