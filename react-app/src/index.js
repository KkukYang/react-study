import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import App3 from "./App3";
import {
    BrowserRouter
    // HashRouter
} from "react-router-dom";
import App4 from "./without-redux/App4";
import App5 from "./using-redux/App5";

//react-redux
import App6 from "./using-react-redux/App6";
import {Provider} from "react-redux";
import store from "./using-react-redux/store";

ReactDOM.render(
    <React.StrictMode>
        {/*CRUD example.*/}
        {/*<App/>*/}

        {/*hook*/}
        {/*<App2/>*/}

        {/*router*/}
        {/*<BrowserRouter>*/}
        {/*    <App3/>*/}
        {/*</BrowserRouter>*/}
        {/*<HashRouter>*/}
        {/*    <App3/>*/}
        {/*</HashRouter>*/}

        {/*without react-redux*/}
        {/*<App4/>*/}

        {/*using redux*/}
        {/*<App5/>*/}

        {/*using react-redux*/}
        <Provider store={store}>
            <App6/>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
