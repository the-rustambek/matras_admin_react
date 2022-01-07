 import react from "react";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import Table from "../Table/Table";
 
 const Customers = () =>{
     return (
            <div className="customers">
                <div className="customers-left">
                    <Dashboard />
                </div>
                <div className="customers-right">
                    <Header />
                    <Table />
                </div>
            </div>
     )
 }

 export default Customers;