import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "../assets/js/main.js";
import "../assets/css/style.css";
import "react-credit-cards/es/styles-compiled.css";



import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../pageShoppingCart/store.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
