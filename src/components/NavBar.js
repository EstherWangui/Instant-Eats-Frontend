import React from "react";
import {Link} from 'react-router-dom';

function NavBar({ onLogout }) {
    function handleLogOut(){
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <header>
            <button onClick={handleLogOut}>Logout</button>
        <li className="nav-item">
        <Link to='/home' className='nav-link'>Home</Link>
      </li>
      <li className="nav-item">
          <Link to='/about' className='nav-link'>About</Link>
        </li>
      </header>
    );
}

export default NavBar;