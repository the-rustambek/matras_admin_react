
import  react from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import "../../App.css"
import CustomersTable from "../../Components/CustomersTable/CustomersTable";

const CustomersPage = () =>{

      return (
      <div className="homepage">
          <div className="homepage-left">
          <Dashboard  />
          </div>
              <div className="homepage-right" >
                  <Header />
                  
                  <CustomersTable   />
              
              {/* <ToifalarTable  /> */}



              {/* <MahsulotlarTable  /> */}


              </div>

              
          
      </div>
  )

    
}

export default CustomersPage;