import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav>
                <div/>
                <ul >
                    <li>
                        <Link  to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link  to="/flights">Flights</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;