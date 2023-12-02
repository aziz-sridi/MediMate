import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login-register/Login';
import Register from './login-register/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddMed from './AddMedForm/AddMed';
import Cards from './NearbyPharmacies/NearbyPharmacies';
import AddAppointment from "./AddAppointment/AddApointment"
const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Register />
  },
  {
    path: '/addmed',
    element: <AddMed />
  },
  {
    path: '/nearby',
    element: <Cards />
  },
  {
    path: '/addappointment',
    element: <AddAppointment />
  },

]

const router = createBrowserRouter(routes);

ReactDOM.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
  document.getElementById('root')
);
