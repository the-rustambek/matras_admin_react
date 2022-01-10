
import  react from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/Table";
// import "./HomePage.css"
import "../../App.css"

const HomePage = () =>{

      return (
      <div className="homepage">
          <div className="homepage-left">
          <Dashboard  />
          </div>
              <div className="homepage-right" >
                  <Header />
                  <Table  />
                  {/* <CustomersTable  items={menuItems} /> */}
              
              {/* <ToifalarTable items={menuItems} /> */}



              {/* <MahsulotlarTable items={menuItems} /> */}


              </div>

              
          
      </div>
  )

    
}

export default HomePage;