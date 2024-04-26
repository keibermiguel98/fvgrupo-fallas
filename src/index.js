
import React from "react";
import ReactDOM from "react-dom/client";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import App from "App";
import { Provider } from "react-redux";
import {store} from "app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
   <App/>
  </Provider>
  
);
