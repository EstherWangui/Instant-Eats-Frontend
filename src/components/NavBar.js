import React from "react";
import {Link} from 'react-router-dom';
import '../components/styles/NavBar.css'

function NavBar({ onLogout }) {
    function handleLogOut(){
        fetch("https://instant-eats-production.up.railway.app/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
      <div className="container">
        <div className="landing-page">
          <marquee behavior="" direction="right to left">You Need To Sign-Up or Login To View The Foods</marquee>

          {/* <h2>You Need To Sign-Up or Login To View The Foods</h2> */}
          <nav className="navbar">
          <button>
            <Link to='/signup' className='nav-link'>SignUp</Link>
            </button>

            <button>          
            <Link to='/login' className='nav-link'>Login</Link>
            </button>
          
            <button>          
            <Link to='/home' className='nav-link'>Food</Link>
            </button>

            <button>
            <Link to='/about' className='nav-link'>About</Link>
            </button>
            
        <button  className='nav' onClick={handleLogOut}>Logout</button>
        </nav>
      </div>
      </div>
    );
}

export default NavBar;