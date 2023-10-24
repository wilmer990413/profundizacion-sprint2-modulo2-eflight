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
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/MyBooking" element={<MyBooking />} />
        <Route path="/Payments" element={<Payments />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default NavRoutes;
