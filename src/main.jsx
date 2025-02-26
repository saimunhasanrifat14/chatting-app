import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import database from "../Database/Firebase.config";
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <App />
  </React.StrictMode>
);
