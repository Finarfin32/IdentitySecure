import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { reducers } from "./api.js";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./register.jsx";
import Login from "./login.jsx";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
