import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    return (
        <div>
                <span>Welcome Usuario</span><br />
                <Link to={'/'}>Home</Link>
                <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
        </div>
    );
}

export default Home;
