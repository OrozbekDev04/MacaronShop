import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { router } from "./routes/router.jsx";
import store from "../src/redux/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <ToastContainer />
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
