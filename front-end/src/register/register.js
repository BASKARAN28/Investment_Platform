import React, { useState,useEffect } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
export const Register = (props) => {
        const [name, setName] = useState('');
        const [gmail, setGmail] = useState('');
        const [password, setPassword] = useState('');
        const [mobno, setMobno] = useState('');
    
        const navigate = useNavigate();
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
              const response = await axios.post(
                "http://127.0.0.1:8181/api/v1/auth/register",
                {
                  name:name,
                  gmail: gmail,
                  mobno: mobno,
                  password: password,
                }
              );
        
              if (response.status === 200) {
                navigate("/");
                setName("");
                setMobno("");
                setGmail("");
                setPassword("");
              }
            } catch (error) {
              console.error("Error: ", error);
            }
          };
    

    return (
        <div className="r2">
        <div className="r">
            <h2 className="reg-h">Register</h2>
        <form className="r1" onSubmit={handleSubmit}>
            <label htmlFor="name">FullName</label>
            <input required value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Fullname" /> 
            <label htmlFor="email">  Email</label> 
            <input required value={gmail} onChange={(e) => setGmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="phonenumber">Mobile Number</label>
            <input required value={mobno} onChange={(e) => setMobno(e.target.value)} type="phonenumber" placeholder="Enter your Moblie Number" id="number" name="number" />
        
            <br/>
            <p class="p">Click below button to submit..</p>
            <button className="r-b" type="submit">Submit</button>
        </form>
        <Link to="/login"><button className=" r-btn">Already have an account? Login here.</button></Link>
    </div>
    </div>
    )
}