import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    <>
        {/* <App /> */}
        <RouterProvider router={AppRouter}/>
        <ToastContainer />
    </>
//    </React.StrictMode>,
)
