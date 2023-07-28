import React, { useState } from "react";
import "./login.css";
import { F } from "./footer";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {useDispatch} from 'react-redux';

export const Login = (props) => {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"POSTEMAIL",payload:gmail});

    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        gmail: gmail,
        password: password,
      });

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // if (response.some((user) => user.gmail === email && user.password === pass)) {
      //   navigate("/Home");
      // }
      navigate('/dashboard');
    } catch (error) {
      console.error('Error: ', error);
      alert("Incorrect Email or Passoword.");
    }
  };

    return (
        <div className="login-body">
<div className="login-div">
<div className="imgdiv" >
    <h1 className="img-h">It's Time To Invest</h1>
<img className="login-img" src="https://res.cloudinary.com/dxgechnhe/image/upload/v1689998333/investing_jcqncr.webp" alt="invest"></img>
<h2 className="img-h2">WHY INVESTING?</h2>
<p className="img-p">You Stay Ahead of Inflation</p>
<p className="img-p">Investing Will Help You Build Wealth</p>
<p className="img-p">Investing Will Get You To Retirement (Or Early Retirement)</p>
<p className="img-p">Investing Can Help You Save on Taxes</p>
<p className="img-p">Invest To Meet Other Financial Goals</p>
</div>
        <div className="login-container">
            <h1 className="h2">Login</h1>
            <form className="l1" onSubmit={handleSubmit}>
                <label className="label" htmlFor="email">Email</label>
                <input className="i" required value={gmail} onChange={(e) => setGmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label className="label" htmlFor="password">Password</label>
                <input className="i"required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" /><br/>
                <button className="b" type="submit">Log In</button>
            </form>
            <Link to="/register"><button className="link-btn">Don't have an account? Register here.</button></Link>
        </div>

</div>
<footer>
    <F />
</footer>
        </div>
    )
    
}
