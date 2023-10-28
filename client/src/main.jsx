import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/index.css";
import { AppContext } from "./context.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <AppContext>
      <App />
      <ToastContainer position="top-center" />
    </AppContext>
  </React.Fragment>
);
