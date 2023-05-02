import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom"
import Router from"./router/Router"
import { Provider } from 'react-redux';
import store from './redux/store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>

  <RouterProvider router={Router}/>
</Provider>

)


reportWebVitals();
