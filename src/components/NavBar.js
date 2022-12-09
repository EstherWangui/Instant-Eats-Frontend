import React from "react";

function NavBar({ onLogout }) {
    function handleLogOut(){
        fetch("instant-eats-production.up.railway.app", {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <header>
            <button onClick={handleLogout}>Logout</button>
        </header>
    );
}

export default NavBar;