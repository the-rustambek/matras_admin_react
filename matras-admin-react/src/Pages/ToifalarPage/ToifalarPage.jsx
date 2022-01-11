

import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";

// import "./HomePage.css"
import "../../App.css"
import ToifalarTable from "../../Components/ToifalarTable/ToifalarTable";

const ToifalarPage = () =>{

      return (
      <div className="homepage">
          <div className="homepage-left">
          <Dashboard  />
          </div>
              <div className="homepage-right" >
                  <Header />
                  
              <ToifalarTable />



              </div>

              
          
      </div>
  )

    
}

export default ToifalarPage;