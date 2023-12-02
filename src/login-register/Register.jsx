import React, { useState } from "react";
import './login-register.css'
import { NavBar } from "../Home/NavBar";
import { HashLink } from 'react-router-hash-link';
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (

        <div className="form auth-form-container">
            <NavBar/>
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <HashLink to="/">
            <button type="submit">Register</button>
            </HashLink>
        </form>
        <HashLink to='/login'>
        <button className="link-btn">Already have an account? Login here.</button>
        </HashLink>
    </div>
    )
}
export default Register;