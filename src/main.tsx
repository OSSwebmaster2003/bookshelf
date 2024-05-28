import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer, Slide } from "react-toastify";
import App from "./App";

import { store } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ToastContainer
        theme="colored"
        position="bottom-right"
        limit={2}
        autoClose={2000}
        transition={Slide}
      />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
