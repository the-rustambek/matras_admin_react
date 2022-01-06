import React, { useState } from "react";
import "./Header.css";
import Search from "../../Assets/Images/Search.png";
import Avatar from "../../Assets/Images/Avatar.png";

const Header = () =>{

    return (
        <div className="header">
<div className="header-left">
    
    
    <input type="text" placeholder="User" required name="user" />
    <img src={Search} alt="Search" />
</div>
<div className="header-right">
    <span className="header-span">
    <img src={Avatar} alt="" className="header-avatar" />

    </span>
    
    <p className="header-name">
        John Doe
    </p>
</div>
        </div>
    )
}


export default Header;