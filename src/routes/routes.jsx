import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import Home from '../pages/home/home';
import Flights from '../pages/flights/flights';
import Login from '../pages/login/login';
import Footer from '../components/footer/footer';
import Register from '../pages/login/Register';
import { ToastContainer } from 'react-toastify';
import MyBooking from "../pages/myBooking/MyBoking";
import Payments from "../pages/payments/Payments";

export const NavRoutes = () => {
  return (
    <>
      <NavBar />
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Routes>
        <Route path="/profundizacion-sprint2-modulo2-eflight/" element={<Home />} />
        <Route path="/profundizacion-sprint2-modulo2-eflight/home" element={<Home />} />
        <Route path="/profundizacion-sprint2-modulo2-eflight/flights" element={<Flights />} />
        <Route path="/profundizacion-sprint2-modulo2-eflight/login" element={<Login />} />
        <Route path="/profundizacion-sprint2-modulo2-eflight/register" element={<Register/>}/>
        <Route path="/profundizacion-sprint2-modulo2-eflight/MyBooking" element={<MyBooking />} />
        <Route path="/profundizacion-sprint2-modulo2-eflight/Payments" element={<Payments />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default NavRoutes;
