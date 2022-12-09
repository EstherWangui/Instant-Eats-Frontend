import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom"
import "../components/styles/Login.css"

function Login({onLogin}) {
    const [user, setUser] = useState("") 
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const nav = useNavigate


    function handleSubmit(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ username, email }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => setUser(user));
                nav("/home")
            }
        })
    }
    if(!user) nav("/signup")
    return (
        <div className='main-form'>
            <h1>Login</h1> 

            <form onSubmit={handleSubmit}>  

            <div className='inner-form'>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="username"
                        required="required"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className='inner-form'>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="email"
                        required="required"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/* <button type="submit" id="signup-btn">
          {signupLoading ? "Loading..." : "Sign Up"}
        </button> */}
        <div>
        <Link id="link" to={"/home"}>
          <span id="login-section"> Have an account already? Go to home </span>
        </Link>
        </div>
                
                <div className="login_link">
                    Not a member?
                    <NavLink to="/signup">Signup</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Login