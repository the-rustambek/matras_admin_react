


import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/Table";
import ToifalarTable from "../../Components/ToifalarTable/ToifalarTable";
import "../../App.css"
import TexnologiyalarTable from "../../Components/TexnologiyalarTable/TexnologiyalarTable";

const TexnologiyalarPage = () =>{
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
            
            <TexnologiyalarTable />



            {/* <MahsulotlarTable items={menuItems} /> */}


            </div>

            </div>
        
    </div>
  )

    
}

export default TexnologiyalarPage;