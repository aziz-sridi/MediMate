import React, { useState } from "react";
import './login-register.css';
import { NavBar } from "../Home/NavBar";
import { HashLink } from 'react-router-hash-link';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const handleClick = () => {
        alert('you are now logged in');
      };
    return (
        
        <div className="form auth-form-container">
            <NavBar/>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <HashLink to="/">
                <button type="submit" onClick={handleClick}>Log In</button>
                </HashLink>
            </form>
            <HashLink to='/signup'>
            <button className="link-btn" >Don't have an account? Register here.</button>
            </HashLink>
        </div>
    )
   
}
export default Login;