  import React from "react";
  import ReactDOM from "react-dom/client";
  import './reset.css';
  import './bootstrap.min.css'
  import "./index.css";
  import  {App } from "./App";
  import { BrowserRouter as Router } from "react-router-dom";
  import reportWebVitals from "./reportWebVitals";
  import { Provider } from "react-redux";
  import store from "store";
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}> 
      <React.StrictMode>
      <Router>
      <App />
      </Router>
    </React.StrictMode>
    </Provider>
   
  );
  
  reportWebVitals();