import React, { useState } from 'react';
import { NavLink , useNavigate} from "react-router-dom";
// import "../css/anna.css"
import "../components/styles/SignUp.css";


function SignUp({onLogin}) {
    const [username, setUsername] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const nav = useNavigate()

    function submitHandler(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => onLogin(user));
                nav("/login")
            }
        })
    }

return (
    <div className='main-form'>
        <h1> SignUp</h1> 

            <form onSubmit={submitHandler}>
                <div className='inner-form'>
                    <input 
                        type="text"
                        name="username" 
                        placeholder="username"
                        required = "required"   
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}                    
                    />
                </div>

                <div className='inner-form'>
                    <input 
                        type="email" 
                        name="email"
                        required = "required"
                        placeholder="email"  
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='inner-form'>
                    <input 
                        type="password" min="8"
                        name="password"
                        required = "required"
                        placeholder="password"  
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"                              
                    />
                </div>

                <div className='inner-form'>
                    <input 
                        type="password" 
                        name="password" 
                        required = "required"
                        placeholder="password confirmation"   
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        autoComplete="current-password"
                    />     
                </div>        
                    
                <button className='signin' type='submit'>Sign Up</button>


                <div className="login_link">
                    Already have an account
                    <NavLink to="/login">Login</NavLink>
                </div>

            </form>
    </div>
)
}
export default SignUp;