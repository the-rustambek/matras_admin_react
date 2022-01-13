
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Table from './Components/Table/Table';
import CustomersPage from './Pages/CustomersPage/CustomersPage';
import HomePage from './Pages/HomePage/HomePage';
import MahsulotlarPage from './Pages/MahsulotlarPage/MahsulotlarPage';
import TexnologiyalarPage from './Pages/TexnologiyalarPage/TexnologiyalarPage';
import ToifalarPage from './Pages/ToifalarPage/ToifalarPage';


function App() {

  return(
    <>
  
  
      <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/customers"  component={CustomersPage} />
    <Route path="/toifalar"  component={ToifalarPage} />
    {/* <Route path="/mahsulotlar"  component={MahsulotlarPage} />
    <Route path="/texnologiyalar"  component={TexnologiyalarPage} /> */}

    </Switch>
  

    </>

   
        

  )
}

export default App;






