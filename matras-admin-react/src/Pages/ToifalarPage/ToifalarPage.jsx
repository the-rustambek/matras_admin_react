

import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/Table";
import ToifalarTable from "../../Components/ToifalarTable/ToifalarTable";
import "../../App.css"

const ToifalarPage = () =>{
      return (
        <div className="homepage">
          <Header />
          <div className="homepage-site">
        <div className="homepage-left">
        <Dashboard  />
        </div>
            <div className="homepage-right" >
                
                {/* <Table  /> */}
                {/* <CustomersTable /> */}
            
            <ToifalarTable />



            {/* <MahsulotlarTable items={menuItems} /> */}


            </div>

            </div>
        
    </div>
  )

    
}

export default ToifalarPage;