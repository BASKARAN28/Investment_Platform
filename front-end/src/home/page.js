import React from "react";
import { Link } from "react-router-dom";
import "./page.css";

import Footer from "./footer";
export const Home = (props) => {
    return (
      <div className="home-b">
         <div className="navbar">
      
    </div>
    <h1 className="hd2"><center>WELCOME TO OUR INVESTMENT PLATFORM</center></h1><br/>

    <div className="bdy">
      
    <img className="img" src="https://res.cloudinary.com/dadr6zgas/image/upload/v1689834219/invest2_xxcrr7.webp" alt="invest"></img>
      <div>
      <h2 className="hd">What is Investing?</h2>
      <p className="pra">Investing is the process of buying assets that increase in value over time and provide returns in the form of income payments or capital gains. In a larger sense, investing can also be about spending time or money to improve your own life or the lives of others. But in the world of finance, investing is the purchase of securities, real estate and other items of value in the pursuit of capital gains or income.</p>
      <h2 className="hd3">How it works!</h2>
      <p className="pra">Investing is the process of buying assets that increase in value over time and provide returns in the form of income payments or capital gains. In a larger sense, investing can also be about spending time or money to improve your own life or the lives of others. But in the world of finance, investing is the purchase of securities, real estate and other items of value in the pursuit of capital gains or income.</p>
      
      <h2 className="hd1">Let's get started..</h2>
<pre><Link to="/log"><button className="bt1">Log in</button></Link>   
 <Link to="/register"><button className="bt2">Register</button></Link></pre>

</div>
    </div>
    <footer>
    <Footer />
    </footer>
</div>
    )
};