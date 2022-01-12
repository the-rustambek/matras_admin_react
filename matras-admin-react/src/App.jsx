
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Table from './Components/Table/Table';
import CustomersPage from './Pages/CustomersPage/CustomersPage';
import HomePage from './Pages/HomePage/HomePage';
import MahsulotlarPage from './Pages/MahsulotlarPage/MahsulotlarPage';
import ToifalarPage from './Pages/ToifalarPage/ToifalarPage';


function App() {

  return(
    <>
    {/* <div className="homepage">
        <div className="homepage-left">
        <Dashboard  />
        </div>
            <div className="homepage-right" >
                {/* <Header />  */}
                {/* <Table  /> */}
                {/* <CustomersTable  items={menuItems} /> */}
            
            {/* <ToifalarTable items={menuItems} /> */}



            {/* <MahsulotlarTable items={menuItems} /> */}
            {/* </div>
 </div> */} 
  
      <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/customers"  component={CustomersPage} />
    <Route path="/toifalar"  component={ToifalarPage} />
    <Route path="/mahsulotlar"  component={MahsulotlarPage} />

    </Switch>
  

    </>

   
        

  )
}

export default App;






