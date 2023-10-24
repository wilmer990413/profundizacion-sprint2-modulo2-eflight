import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.scss";
import icon from "../../../public/icon.png";
import currencyInfo from "../../../public/currencyInfo.svg";
import noti from "../../../public/noti.svg";
import userPhoto from "../../../public/userPhoto.png";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div />
        <ul className="main-container">
          <li className="menu-item">
            <Link to="/" className="menu-link">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/login" className="menu-link">
              Login
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/flights" className="menu-link">
              Flights
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/MyBooking" className="menu-link">
              MyBoking
            </Link>
          </li>
        </ul>

        <div className="main-container">
          <div className="image-wrapper">
            <div className="flight-info">
              <img className="mainIcon" src={icon} alt="Flight Image" />
              <div className="flight-name">E-flight</div>
            </div>
            <div className="currency-info">
              <div className="currency">USD</div>
              <img
                className="currencyIcon"
                src={currencyInfo}
                alt="Currency Icon"
              />
              <img className="currencyIcon" src={noti} alt="Notification" />
              <img className="currencyIcon" src={userPhoto} alt="User photo" />
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
