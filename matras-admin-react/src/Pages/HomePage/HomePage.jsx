

import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/Table";
// import "./HomePage.css"
import "../../App.css"

const HomePage = () =>{
      return (
        <div className="homepage">
          <Header />
          <div className="homepage-site">
        <div className="homepage-left">
        <Dashboard  />
        </div>
            <div className="homepage-right" >
                
                <Table  />
                {/* <CustomersTable  items={menuItems} /> */}
            
            {/* <ToifalarTable items={menuItems} /> */}



            {/* <MahsulotlarTable items={menuItems} /> */}


            </div>

            </div>
        
    </div>
  )

    
}

export default HomePage;