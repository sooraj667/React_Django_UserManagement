import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import customersSlice from "./feautures/customers";
import customerlogin from "./feautures/customerlogin";
import adminloginSlice from "./feautures/adminlogin";
import adminHomeSlice from "./feautures/adminhome"



const appstore = configureStore({
  reducer: {
    customers: customersSlice,
    customerlogin:customerlogin,
    adminlogin:adminloginSlice,
    adminhome:adminHomeSlice

  },
});

export default appstore;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appstore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
