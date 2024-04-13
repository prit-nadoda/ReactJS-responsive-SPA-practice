import React from "react";
import resNav from "../assets/scripts/app.js";



function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.Q4H6aTA5hs7XkGkeboNA7gHaCP&pid=Api&P=0&h=180"
            alt="logo"
            border="0"
          />
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">Profile</a>
        </div>
        <div className="login-btn">
          <button className="login">Login</button>
          <button onClick={resNav} className="res-icon">
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </div>
        <div className="menu-expend">
        <a href="#">Home</a><br />
        <a href="#">About</a><br />
        <a href="#">Services</a><br />
        <a href="#">Contact</a><br />
        <a href="#">Profile</a><br />
      </div>
     
      
    </>
  );
}

export default NavBar;
