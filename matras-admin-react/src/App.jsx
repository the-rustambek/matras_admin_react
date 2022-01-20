
import {  Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';

import { AuthProvider } from './Context/AuthContext';
import { MatrasContextProvider } from './Context/MatrasContext';
// import { MatrasContextProvider } from './Context/MatrasContext';
import CustomersPage from './Pages/CustomersPage/CustomersPage';
import HomePage from './Pages/HomePage/HomePage';
import MahsulotlarPage from './Pages/MahsulotlarPage/MahsulotlarPage';
import ManzilPage from './Pages/ManzilPage/ManzilPage';
import TexnologiyalarPage from './Pages/TexnologiyalarPage/TexnologiyalarPage';
import ToifalarPage from './Pages/ToifalarPage/ToifalarPage';
import Private from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';


function App() {

  return(
    <AuthProvider>

      
      <MatrasContextProvider>
  {/* <Login /> */}
   
      <Switch>
    <PublicRoute path="/login"    component={Login} exact />
    {/* <Route path="/home" exact component={HomePage} /> */}
    <Private path="/customers"  component={CustomersPage} />
    <Private path="/toifalar"  component={ToifalarPage} />
    <Private path="/mahsulotlar"  component={MahsulotlarPage} />
    <Private path="/texnologiyalar"  component={TexnologiyalarPage} />
    <Private path="/manzil"  component={ManzilPage} />

<Private path="/" component={HomePage} />
    </Switch>
    </MatrasContextProvider>

    </AuthProvider>

   
        

  )
}

export default App;






