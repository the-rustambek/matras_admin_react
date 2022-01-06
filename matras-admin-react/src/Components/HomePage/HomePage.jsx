import React, { useState } from "react";
import "./HomePage.css";
import Dashboard from "../Dashboard/Dashboard"

const HomePage = () =>{

    return (
        <div className="homepage">
            <div className="container-fluid">
                <Dashboard />
            </div>
        </div>
    )
    
}

export default HomePage;