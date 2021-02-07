import {store} from "./redux/store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                    store={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState()
    renderEntireTree(state);
});