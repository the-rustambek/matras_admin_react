
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Table from './Components/Table/Table';
import { AuthProvider } from './Context/AuthContext';
import CustomersPage from './Pages/CustomersPage/CustomersPage';
import HomePage from './Pages/HomePage/HomePage';
import MahsulotlarPage from './Pages/MahsulotlarPage/MahsulotlarPage';
import ManzilPage from './Pages/ManzilPage/ManzilPage';
import TexnologiyalarPage from './Pages/TexnologiyalarPage/TexnologiyalarPage';
import ToifalarPage from './Pages/ToifalarPage/ToifalarPage';
import ProtectedRoute from './Routes/ProtectedRoute';
import PublicRoute from './Routes/PublicRoute';


function App() {

  return(
    <AuthProvider>
  {/* <Login /> */}
   
      <Switch>
    <PublicRoute path="/login"    component={Login} exact />
    {/* <Route path="/home" exact component={HomePage} /> */}
    <ProtectedRoute path="/customers"  component={CustomersPage} />
    <ProtectedRoute path="/toifalar"  component={ToifalarPage} />
    <ProtectedRoute path="/mahsulotlar"  component={MahsulotlarPage} />
    <ProtectedRoute path="/texnologiyalar"  component={TexnologiyalarPage} />
    <ProtectedRoute path="/manzil"  component={ManzilPage} />

<ProtectedRoute path="/" component={HomePage} />
    </Switch>
  

    </AuthProvider>

   
        

  )
}

export default App;






