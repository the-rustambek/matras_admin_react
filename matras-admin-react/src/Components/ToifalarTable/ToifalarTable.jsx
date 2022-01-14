import { useEffect } from "react";
// import Toggle from "../Toggle/Toggle";
import Edit from "../../Assets/Images/edit.png";
import Close from "../../Assets/Images/Close.png";
// // import TrComponent from "../TrComponent/TrComponent";
import "./ToifalarTable.css"
// import Delete from "../../Assets/Images/delete.png";
import { useState } from "react";
// import Modal from "react-modal";
import DeleteModal from "../DeleteModal/DeleteModal";
import Delete from "../../Assets/Images/delete.png";

import Modal from "../Modal/Modal";
import EditModal from "../EditModal/EditModal";

const ToifalarTable = () =>{
// console.log(items,"aloooo")
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
                        <th>Toifalar</th>

                        <th></th>
                        <th></th>

                    </tr>
                </thead>
            </table>
        </div>
        <div className="tbl-content">
            <table>
                <tbody>

                    {data.map((row,i) =>(
                    <tr className="tr" key={i}>
                        <td className="td-left">{row.username}</td>
                        <td className="td-right">
                            <button className="edit-btn" key={row.id} onClick={()=> openEditModal()} >
                                <img src={Edit} alt="" />
                            </button>
                            <button className="delete-btn" key={row.id} onClick={()=> openDeleteModal()} >
                                <img src={Delete} alt="" /></button>

                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>


        </div>
        <button className="btns" onClick={() => openAddModal() }>Qo'shish</button>

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
        <Modal show={editModal} w={300}>
            <div className="modal-blok">
                {/* salom */}
                {/* <div className="modal-closes"> */}
                    <button className="close-btn" onClick={()=>setEditModal()}>
                        <img src={Close} className="close-icon" alt="" />
                    </button>
                    {/* </div> */}
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

        <Modal show={addModal} w={300} >
            <div className="modal-blok">
                
                <button className="close-btn" onClick={()=>setAddModal()}>
                    <img src={Close} className="close-icon" alt="" />
                </button>
            
            <h2 className="modal-title">Qo'shish</h2>
            <form className="modal-form">
                <p className="modal-text">
                    Kategoriya nomi
                </p>
                <input type="text" className="modal-input" required placeholder="masalan: Model B" />
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

</section>


</div>

)
}

export default ToifalarTable;