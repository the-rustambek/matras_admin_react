

import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/Table";
import CustomersTable from "../../Components/CustomersTable/CustomersTable";
import "../../App.css"

const CustomersPage = () =>{
      return (
        <div className="homepage">
          <Header />
          <div className="homepage-site">
        <div className="homepage-left">
        <Dashboard  />
        </div>
            <div className="homepage-right" >
                
                {/* <Table  /> */}
                <CustomersTable />
            
            {/* <ToifalarTable items={menuItems} /> */}



            {/* <MahsulotlarTable items={menuItems} /> */}


            </div>

            </div>
        
    </div>
  )

    
}

export default CustomersPage;