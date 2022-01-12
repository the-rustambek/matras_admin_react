

import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import MahsulotlarTable from "../../Components/MahsulotlarTable/MahsulotlarTable";
// import "./HomePage.css"
import "../../App.css"

const MahsulotlarPage = () =>{
      return (
        <div className="homepage">
          <Header />
          <div className="homepage-site">
        <div className="homepage-left">
        <Dashboard  />
        </div>
            <div className="homepage-right" >
                
                {/* <Table  /> */}
                {/* <CustomersTable  items={menuItems} /> */}
            
            {/* <ToifalarTable items={menuItems} /> */}



            <MahsulotlarTable />


            </div>

            </div>
        
    </div>
  )

    
}

export default MahsulotlarPage;