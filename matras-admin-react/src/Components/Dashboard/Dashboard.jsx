import React, { useState } from "react";
import "./Dashboard.css";
import Logo from "../../Assets/Images/Logo.png";
import Home from "../../Assets/Images/home.png";

const Dashboard = () =>{

    return (
        <div className="dashboard">

            <div className="dashboard-header">
                <img src={Logo} alt="Logo" className="dashboard-logo" />
                <h2 className="dashboard-title">
                Matrassue
                </h2>
            </div>
            <ul className="dashboard-list">
                <li className="dashboard-item">
                    <a href="#" className="dashboard-link">
                        <img src={Home} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Buyurtmalar
                        </h3>
                    </a>
                </li>
                <li className="dashboard-item">
                    <a href="#" className="dashboard-link">
                        <img src={Home} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Buyurtmalar
                        </h3>
                    </a>
                </li>
                <li className="dashboard-item">
                    <a href="#" className="dashboard-link">
                        <img src={Home} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Buyurtmalar
                        </h3>
                    </a>
                </li>
                <li className="dashboard-item">
                    <a href="#" className="dashboard-link">
                        <img src={Home} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Buyurtmalar
                        </h3>
                    </a>
                </li>
                <li className="dashboard-item">
                    <a href="#" className="dashboard-link">
                        <img src={Home} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Buyurtmalar
                        </h3>
                    </a>
                </li>
                <li className="dashboard-item">
                    <a href="#" className="dashboard-link">
                        <img src={Home} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Buyurtmalar
                        </h3>
                    </a>
                </li>
                
            </ul>

        </div>
    )
    
}

export default Dashboard;