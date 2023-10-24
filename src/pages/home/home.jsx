import React from 'react'
import { Link} from "react-router-dom";

function Home() {
    return (
        <div>
                <span>Welcome Usuario</span><br />
                <Link to={'/'}>Home</Link>
                <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
        </div>
    );
}

export default Home