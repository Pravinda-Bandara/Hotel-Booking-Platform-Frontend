import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {StoreProvider} from "./Store.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {RegisterPage} from "./pages/RegisterPage.jsx";
import {LoginPage} from "./pages/LoginPage.jsx";
import {BookingsPage} from "./pages/BookingsPage.jsx";
import ProtectedRoute from "./routeGuard/ProtectedRoute.jsx";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />


            <Route element={<ProtectedRoute />}>
                <Route path="booking/:userId" element={<BookingsPage />} />
            </Route>

        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StoreProvider>
                <RouterProvider router={router} />
        </StoreProvider>
    </React.StrictMode>,
)