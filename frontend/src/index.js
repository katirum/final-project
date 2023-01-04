  import React from "react";
  import ReactDOM from "react-dom/client";
  import './reset.css';
  import './bootstrap.min.css'
  import "./index.css";
  import  {App } from "./App";
  import { BrowserRouter as Router } from "react-router-dom";
  import reportWebVitals from "./reportWebVitals";
  import { Provider } from "react-redux";
  import { store } from './reducers/store'
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
      <App />
      </Provider>
      </Router>
    </React.StrictMode>
  );
  
  reportWebVitals();