import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import Home from '../pages/home/home';
import Flights from '../pages/flights/flights';
import Login from '../pages/login/App';
import Footer from '../components/footer/footer';

export const NavRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default NavRoutes;
