
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


const allCategories = [ ...new Set(items.map((item) => item.category))]
console.log(allCategories);

function App() {

 
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState(allCategories);

  const filterItems = ((category) =>{
  
      if(category === "Buyurtmalar"){
        setMenuItems(items);
        return;
      }
  
    const newItems =  items.filter((item) => item.category === category);
    setMenuItems(newItems);
  })

  return (
      <div className="homepage">
          <div className="homepage-left">
          <Dashboard categories={categories} filterItems={filterItems} />
          </div>
              <div className="homepage-right" >
                  <Header />
                  {/* <Table  items={menuItems} /> */}
                  {/* <CustomersTable  items={menuItems} /> */}
              
              {/* <ToifalarTable items={menuItems} /> */}



              <MahsulotlarTable items={menuItems} />


              </div>

              
          
      </div>
  )

















  // return (
  //   <div className="App">


  //  {/* <Login /> */}  

  //  <HomePage />

   


  //   </div>
  // );
}

export default App;
