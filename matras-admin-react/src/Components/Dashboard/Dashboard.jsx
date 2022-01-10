import React from "react";
import "./Dashboard.css";
import Logo from "../../Assets/Images/Logo.png";
import Home from "../../Assets/Images/home.png";
import { Link, Switch } from "react-router-dom";

import Profile2 from "../../Assets/Images/Mask Group.png";
import Toifalar from "../../Assets/Images/view_column.png";
import ShopCart from "../../Assets/Images/shopping_cart.png";
import Texnologiyalar from "../../Assets/Images/Texnologiyalar.png";
import WhiteMap from "../../Assets/Images/White-map.png";
import HomePage from "../../Pages/HomePage/HomePage";
import CustomersPage from "../../Pages/CustomersPage/CustomersPage";
import ToifalarPage from "../../Pages/ToifalarPage/ToifalarPage";



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
                    <Link to="/" type="button" className="dashboard-link" >
                        <img src={Home} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Buyurtmalar
                        </h3>
                    </Link>
                </li>
                                <li className="dashboard-item">
                                <Link to="/customers"  className="dashboard-link">
                                    <img src={Profile2} alt="" className="dashboard-icon" />
                                    <h3 className="dashboard-subtitle">
                                        Customers
                                    </h3>
                                </Link>
                            </li>
                            <li className="dashboard-item">
                                <Link to="/toifalar"  className="dashboard-link">
                                    <img src={Toifalar} alt="" className="dashboard-icon" />
                                    <h3 className="dashboard-subtitle">
                                    Toifalar
                                    </h3>
                                </Link>
                            </li>
                            <li className="dashboard-item">
                                <Link to="/mahsulotlar"  className="dashboard-link">
                                    <img src={ShopCart} alt="" className="dashboard-icon" />
                                    <h3 className="dashboard-subtitle">
                                        Mahsulotlar
                                    </h3>
                                </Link>
                            </li>
                            <li className="dashboard-item">
                                <Link to="/texnologiyalar"  className="dashboard-link">
                                    <img src={Texnologiyalar} alt="" className="dashboard-icon" />
                                    <h3 className="dashboard-subtitle">
                                    Texnologiyalar
                                    </h3>
                                </Link>
                            </li>
                            <li className="dashboard-item">
                                <Link to="/manzil"  className="dashboard-link">
                                    <img src={WhiteMap} alt="" className="dashboard-icon" />
                                    <h3 className="dashboard-subtitle">
                                        Manzil
                                    </h3>
                                </Link>
                            </li>
                            
             
              
             

            </ul>

        </div>
    )
    
}

<Switch>
    <Public path="/" component={HomePage} exact />
    <Public path="/customers" component={CustomersPage} exact />
    <Public path="/toifalar" component={ToifalarPage} exact />
    {/* <Public path="/mahsulotlar" component={MahsulotA} exact /> */}
    {/* <Public path="/" component={HomePage} exact /> */}
    {/* <Public path="/" component={HomePage} exact /> */}

    
</Switch>


export default Dashboard;