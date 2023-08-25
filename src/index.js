import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/inter';
import 'react-toastify/dist/ReactToastify.css';
import { DocumentHistoryContextProvider } from "./context/DocumentHistoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <DocumentHistoryContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </DocumentHistoryContextProvider>

);
