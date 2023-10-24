import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import Home from '../pages/home/home';
import Flights from '../pages/flights/flights';
import Login from '../pages/login/login';
import Footer from '../components/footer/footer';
import Booking from '../components/booking/Booking';
export const NavRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </>
  );
};

export default NavRoutes;
