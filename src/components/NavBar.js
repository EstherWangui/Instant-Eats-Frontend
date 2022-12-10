import React from "react";
import {Link} from 'react-router-dom';
import '../components/styles/NavBar.css'

function NavBar({ onLogout }) {
    function handleLogOut(){
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div className="landing-page">
      
          <h2>You Need To Sign-Up or Login To View The Foods</h2>
          <nav className="navbar">
          <button>
          <li className="nav-item">
            <Link to='/signup' className='nav-link'>SignUp</Link>
            </li>
            </button>

            <button>
          <li className="nav-item">
            <Link to='/login' className='nav-link'>Login</Link>
            </li>
            </button>
          
            <button>
          <li className="nav-item">
            <Link to='/home' className='nav-link'>Food</Link>
            </li>
            </button>

            <button>
            <li className="nav-item">
          <Link to='/about' className='nav-link'>About</Link>
        </li>
        </button>
            
        <button onClick={handleLogOut}>Logout</button>
        </nav>
      </div>
    );
}

export default NavBar;