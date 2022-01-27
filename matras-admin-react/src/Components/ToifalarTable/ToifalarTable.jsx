import Edit from "../../Assets/Images/edit.png";
import Close from "../../Assets/Images/Close.png";
import "./ToifalarTable.css"
import Delete from "../../Assets/Images/delete.png";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import constants from "../../configs/constants";



const  ToifalarTable = () =>{
const [deleteModal,setDeleteModal] = useState(false);
const [editModal,setEditModal] = useState(false);
const [addModal,setAddModal] = useState(false);
const [cName, setCName] = useState("")


function openDeleteModal(){
setDeleteModal(!deleteModal)
}
function openEditModal(){
setEditModal(!editModal)
}

function openAddModal(){
setAddModal(!addModal)
}

const [data, setData] = useState([]);

const getCategories = async(id) => {
let token = window.localStorage.getItem("token")

let response = await fetch(constants.API_URL+"/v1/categories",{
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    "Authorization": token
}
})

response = await response.json();
    if(response?.data.categories){ 
    setData(response?.data.categories)
    }
}

const createCategory = async(name) => {
    let token = window.localStorage.getItem("token")
    
    let response = await fetch(constants.API_URL+"/v1/categories",{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": token
        },
        body: JSON.stringify({
            category_name: name
        })
    })
    
    response = await response.json();
        if(response?.data.categories){ 
        getCategories()
    }
}

const delete_category = async(id) => {
    let token = window.localStorage.getItem("token")
    let response = await fetch(constants.API_URL+`/v1/categories/${id}`,{
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
    "Authorization": token
}
})

    response = await response.json();
        console.log(response);
        if(response.ok == true) {
        openDeleteModal()
        getCategories()
    }
}

useEffect(async () => {
await getCategories()
}, [])



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

                    {data.length > 0 &&  data.map((category, i) =>(
                    <tr className="tr" key={i}>
                        <td className="td-left">{category.category_name}</td>
                        <td className="td-right">
                            <button className="edit-btn"  onClick={()=> openEditModal()} >
                                <img src={Edit} alt="" />
                            </button>
                            <button key={i} className="delete-btn"  onClick={()=> openDeleteModal()} >
                                <img src={Delete} alt="" /></button>
                        </td>

                        <Modal show={deleteModal} w={400} mh={120}>
                            <div className="delete-box">
                                <h2 className="delete-title">Haqiqatdan ham o'chirmoqchimisiz ?
                                </h2>
                                <div className="delete-footer">
                                    <button className="delete-no" onClick={()=>openDeleteModal()}>
                                        Yo'q
                                    </button>
                                    <button className="delete-yes" onClick={() => delete_category(category.category_id)} type="submit">
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
                                    <input type="text" className="modal-input" required
                                        placeholder="masalan: Model A" />
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
                    </tr>
                    ))}

                </tbody>
            </table>


        </div>
        <button className="btns" onClick={()=> openAddModal() }>Qo'shish</button>



        <Modal show={addModal} w={300}>
            <div className="modal-blok">

                <button className="close-btn" onClick={()=>setAddModal()}>
                    <img src={Close} className="close-icon" alt="" />
                </button>

                <h2 className="modal-title">Qo'shish</h2>
                <form className="modal-form">
                    <p className="modal-text">
                        Kategoriya nomi
                    </p>
                    <input type="text" className="modal-input"   onChange={(e) => {
                        setCName(e.target.value)
                    }} required placeholder="masalan: Model B" />
                    <div className="modal-box">
                        <p className="modal-subtext">Holat</p>
                        <div className="toggle">

                            <input type="checkbox" id="holat"  />
                            <label className="toggle-label" for="holat">Toggle</label>

                        </div>
                    </div>

                    <button type="submit" onClick={() => { createCategory(cName) }}  className="modal-btn">
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