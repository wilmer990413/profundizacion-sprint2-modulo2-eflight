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
        <div className="main-container">
            <Link className="flight-info" to="/profundizacion-sprint2-modulo2-eflight/home">
              <img className="mainIcon" src={icon} alt="Flight Image" />
              <div className="flight-name">E-flight</div>
            </Link>
            <div className="currency-info">
              <div className="currency">USD</div>
              <img
                className="currencyIcon"
                src={currencyInfo}
                alt="Currency Icon"
              />
              <img className="currencyIcon" src={noti} alt="Notification" />
              <Link to="/profundizacion-sprint2-modulo2-eflight/login">
                <img className="currencyIcon" src={userPhoto} alt="User photo" />
              </Link>
            </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
