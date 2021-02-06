import {store} from "./redux/store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState()
    renderEntireTree(state);
});