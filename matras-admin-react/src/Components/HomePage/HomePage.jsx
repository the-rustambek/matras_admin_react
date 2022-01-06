import React, { useState } from "react";
import "./HomePage.css";
import Dashboard from "../Dashboard/Dashboard"
import Header from "../Header/Header";
import Table from "../Table/Table";

const HomePage = () =>{

    return (
        <div className="homepage">
            <div className="homepage-left">
            <Dashboard />
            </div>
                <div className="homepage-right">
                    <Header />
                    <Table />
                </div>

                
            
        </div>
    )
    
}

export default HomePage;