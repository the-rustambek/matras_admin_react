
import './App.css';
// import HomePage from './Components/HomePage/HomePage';
import items from "./data";
// import Login from './Components/Login/Login';

import react, { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Table from './Components/Table/Table';
import CustomersTable from './Components/CustomersTable/CustomersTable';
import ToifalarTable from './Components/ToifalarTable/ToifalarTable';
import MahsulotlarTable from './Components/MahsulotlarTable/MahsulotlarTable';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CustomersPage from './Pages/CustomersPage/CustomersPage';
import ToifalarPage from './Pages/ToifalarPage/ToifalarPage';


// const allCategories = [ ...new Set(items.map((item) => item.category))]
// console.log(allCategories);

function App() {

 
  // const [menuItems,setMenuItems] = useState(items);
  // const [categories,setCategories] = useState(allCategories);

  // const filterItems = ((category) =>{
  
  //     if(category === "Buyurtmalar"){
  //       setMenuItems(items);
  //       return;
  //     }
  
  //   const newItems =  items.filter((item) => item.category === category);
  //   setMenuItems(newItems);
  // })

  // return (
  //     <div className="homepage">
  //         <div className="homepage-left">
  //         <Dashboard categories={categories} filterItems={filterItems} />
  //         </div>
  //             <div className="homepage-right" >
  //                 <Header />
  //                 {/* <Table  items={menuItems} /> */}
  //                 {/* <CustomersTable  items={menuItems} /> */}
              
  //             {/* <ToifalarTable items={menuItems} /> */}



  //             <MahsulotlarTable items={menuItems} />


  //             </div>

              
          
  //     </div>
  // )


  return(
    // <AuthProvider>
      <BrowserRouter>
<HomePage />

{/* <CustomersPage /> */}
{/* <ToifalarPage /> */}
      {/* <Route path="/" exact name="Buyurtmalar" component={HomePage} /> */}
      {/* <Route path="/customers" exact name="customers" component={Customers} />
      <Route path="/toifalar" exact name="toifalar" component={Toifalar} />
      <Route path="/mahsulotlar" exact name="mahsulotlar" component={Mahsulotlar} />
      <Route path="/texnologiyalar" exact name="texnologiyalar" component={Texnologiyalar} />
      <Route path="/manzil" exact name="manzil" component={Manzil} /> */}
      
      </BrowserRouter>
    // </AuthProvider>
  )
















  // return (
  //   <div className="App">


  //  {/* <Login /> */}  

  //  <HomePage />

   


  //   </div>
  // );
}

export default App;

