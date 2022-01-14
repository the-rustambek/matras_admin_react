

import Dashboard from "../../Components/Dashboard/Dashboard";
import Header from "../../Components/Header/Header";
import Table from "../../Components/Table/Table";
import ToifalarTable from "../../Components/ToifalarTable/ToifalarTable";
import "../../App.css"
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import Close from "../../Assets/Images/Close.png";
import ManzilTable from "../../Components/ManzilTable/ManzilTable";


const ManzilPage = () =>{

  const [addModal,setAddModal] = useState(false);
  const [editModal,setEditModal] = useState(false);


  function openAddModal(){
      setAddModal(!addModal)
  }
  function openEditModal(){
      setEditModal(!editModal)
  }

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
            
            <ManzilTable />

            </div>

            </div>

            
    <Modal show={addModal} w={440} mh={586} className="edit-box">
            <div className="modal-blok">
            <div className="modal-close">
                <button onClick={()=>openAddModal()}>
                    <img src={Close} className="close-icon" alt="" />
                </button>
            </div>
            <h2 className="modal-title">Toifani tahrirlash</h2>
            <form className="modal-form">
                <p className="modal-text">
                    Toifa nomi
                </p>
                <input type="text" className="modal-input" required placeholder="masalan: Model A" />
                <div className="modal-box">
                    <p className="modal-subtext">Holat</p>
                    <div className="toggle">

                        <input type="checkbox" id="holat" />
                        <label className="toggle-label" for="holat">Toggle</label>

                    </div>
                </div>

                <button type="submit" className="modal-btn">
                    Qo'shish
                </button>
            </form>
        </div>
    </Modal>    


    <Modal show={editModal} w={440} mh={586}  className="edit-box">
    <div className="modal-blok">
    <div className="modal-close">
        <button  onClick={() =>openEditModal()}>
            <img src={Close} className="close-icon" alt="" />
        </button>
    </div>
    <h2 className="modal-title">Qo'shish</h2>
    <form  className="modal-form">
        <p className="modal-text">
            Kategoriya nomi
        </p>
        <input type="text" className="modal-input" required placeholder="masalan: Model B" />
<div className="modal-box">
    <p className="modal-subtext">Holat</p>
    <div className="toggle">

<input type="checkbox"  id="holat" />
    <label className="toggle-label" for="holat" >Toggle</label>

</div>
</div>

<button type="submit" className="modal-btn">
    Qo'shish
</button>
    </form>
    </div>
    </Modal> 
        
    </div>
  )

    
}

export default ManzilPage;