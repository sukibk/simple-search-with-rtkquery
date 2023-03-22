import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react/index.js";
import {productsApi} from "./store/productApi.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={productsApi}>
    <App />
  </ApiProvider>,
)
