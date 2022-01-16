import  { useEffect } from "react";
import { useState } from "react";
import "../TexnologiyalarTable/TexnologiyalarTable.css";
import Edit from "../../Assets/Images/edit.png";
import Close from "../../Assets/Images/Close.png";
import Delete from "../../Assets/Images/delete.png";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
;



const TexnologiyalarTable = () =>{
     const [data,setData] = useState([]);
     const [deleteModal,setDeleteModal] = useState(false);
const [editModal,setEditModal] = useState(false);
const [addModal,setAddModal] = useState(false);



function openDeleteModal(){
setDeleteModal(!deleteModal)
}
function openEditModal(){
setEditModal(!editModal)
}

function openAddModal(){
    setAddModal(!addModal)
    }
   
     useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => setData(data))
    },[])

return (
    <div className="toifalar-table">
    <section className="tables">
    <div className="tbl-header">
        <table>
            <thead>
                <tr>
                    <th>Nomlari</th>
                    <th>Matn</th>
                    <th>Video</th>
                    
                    <th></th>
                    <th></th>
                    
                </tr>
            </thead>
        </table>
    </div>
    <div className="tbl-content">
        <table>
            <tbody>
           
                {data.length > 0 && data.map((row,i) =>(

            
     
        <tr className="tr" key={i} >
       <div className="td-left">
       <td className="">{row.username}</td>
        <td className="">{row.name}</td>
        <td className="">{row.email}</td>
       </div>
        <div className="tr-toifalar">
        
        <td className="td">
        <button className="edit-btn edit-box" key={row.id} onClick={()=> openEditModal()} >
                                <img src={Edit} alt="" />
                            </button>
                            <button className="delete-btn" key={row.id} onClick={()=> openDeleteModal()} >
                                <img src={Delete} alt="" /></button>

        </td>
        </div>
        
    </tr>
                ))}
        
            </tbody>
        </table>

    </div>




</section>
<button className="add-buttons" onClick={() => openAddModal() }>Qo'shish</button>


<Modal show={deleteModal} w={400} mh={120}>
            <div className="delete-box">
                <h2 className="delete-title">Haqiqatdan ham o'chirmoqchimisiz ?
                </h2>
                <div className="delete-footer">
                    <button className="delete-no" onClick={()=>openDeleteModal()}>
                        Yo'q
                    </button>
                    <button className="delete-yes" type="submit">
                        Ha
                    </button>
                </div>
            </div>
        </Modal>
        <Modal show={editModal} w={300} mh={400}>
            <div className="modal-blok">
                {/* salom */}
                {/* <div className="modal-closes"> */}
                    <button className="close-btn" onClick={()=>setEditModal()}>
                        <img src={Close} className="close-icon" alt="" />
                    </button>
                    {/* </div> */}
                <h2 className="modal-title">Texnologiyalarni tahrirlash</h2>
                <form className="modal-form">
                 
    <p className="form-text">
            Nomlari
        </p>
        <Input type="text" placeholder="Masalan: Kevin" />
     
        <p className="form-text">
            Matn
        </p>
        <Input type="text" placeholder="Masalan: Modede  " />
     
    
        <p className="form-text">
            Video
        </p>
        <Input type="text" placeholder="Masalan: https://t.me/it_time" />

                    <div className="modal-box">
                        <p className="modal-subtext">Holat</p>
                        <div className="toggle">

                            <input type="checkbox" id="holat" />
                            <label className="toggle-label" for="holat">Toggle</label>

                        </div>
                    </div>

                    <button type="submit" className="modal-btn ">
                        Qo'shish
                    </button>
                </form>
            </div>
        </Modal>

        <Modal show={addModal} w={500} mh={370} >
            <div className="modal-blok">
                
                
                <button className="close-btn" onClick={()=>setAddModal()}>
                    <img src={Close} className="close-icon" alt="" />
                </button>
            
            <h2 className="modal-title">Qo'shish</h2>
            <form className="modal-form">
              <div className="modal-header">
              <div className="modal-left">  <p className="modal-text">
                    Nomi
                </p>
                <input type="text" className="modal-input" required placeholder="masalan: Menory foam" />
                <p className="modal-text">
                    Description
                </p>
                <input type="text" className="modal-input" required placeholder="masalan: Menory desc" /></div>
                <div className="modal-right">  <p className="modal-text">
                    Rasm
                </p>
                <input type="text" className="modal-input" required placeholder="Rasm url" />
                <p className="modal-text">
                    Video 
                </p>
                <input type="text" className="modal-input" required placeholder="Video url" /></div></div>
                <div className="modal-boxes">
                    <div className="modal-toggles">
                    <div className="modal-subtext">Holat</div>
                    <div className="toggle">

                        <input type="checkbox" id="holat" />
                        <label className="toggle-label" for="holat">Toggle</label>
                        </div>
                        </div>

                        <div className="">
                        <button type="submit" className="modal-btn">
                    Qo'shish
                </button>
                </div>
                    </div>
            

               
            </form>
</div>
</Modal>
</div>

)
}

export default TexnologiyalarTable;