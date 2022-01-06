import React, { useState } from "react";
import "./Dashboard.css";
import Logo from "../../Assets/Images/Logo.png";
import Home from "../../Assets/Images/home.png";
import Profile2 from "../../Assets/Images/Mask Group.png";
import Toifalar from "../../Assets/Images/view_column.png";
import ShopCart from "../../Assets/Images/shopping_cart.png";
import Texnologiyalar from "../../Assets/Images/Texnologiyalar.png";
import WhiteMap from "../../Assets/Images/White-map.png";



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
                        <img src={Profile2} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Customers
                        </h3>
                    </a>
                </li>
                <li className="dashboard-item">
                    <a href="#" className="dashboard-link">
                        <img src={Toifalar} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                        Toifalar
                        </h3>
                    </a>
                </li>
                <li className="dashboard-item">
                    <a href="#" className="dashboard-link">
                        <img src={ShopCart} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Mahsulotlar
                        </h3>
                    </a>
                </li>
                <li className="dashboard-item">
                    <a href="#" className="dashboard-link">
                        <img src={Texnologiyalar} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                        Texnologiyalar
                        </h3>
                    </a>
                </li>
                <li className="dashboard-item">
                    <a href="#" className="dashboard-link">
                        <img src={WhiteMap} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Manzil
                        </h3>
                    </a>
                </li>
                
            </ul>

        </div>
    )
    
}

export default Dashboard;