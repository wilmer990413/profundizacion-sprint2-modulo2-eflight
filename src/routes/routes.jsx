import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import Home from '../pages/home/home';
import Flights from '../pages/flights/flights';
import Login from '../pages/login/login';

export const NavRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/flights" element={<Flights />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </>
    );
};

export default NavRoutes;
