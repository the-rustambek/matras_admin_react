 
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
const [id, setId] = useState("")


const [info,setInfo]= useState({name:"", status: true});



const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInfo((preval) => {
        return {
            ...preval,
            [name]: value
        }
    })
}

 
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

// 
const createCategory = async(name,status) => {
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
        if(response?.ok == true){ 
        getCategories()
    }
}


const delete_category = async(id) => {

    // console.log(id);
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

const update_category = async(id, name) => { 
    let token = window.localStorage.getItem("token")
   
    let response = await fetch(constants.API_URL+`/v1/categories/${id}`,{
    method: "PUT",
    headers: {
    "Content-Type": "application/json",
    "Authorization": token
    },
    body: JSON.stringify({
        category_name: name
    })
})

    response = await response.json();
        // console.log(response);
        if(response.ok == true) {
        openEditModal()
        getCategories()
    }
}


    useEffect(async () => {
    await getCategories()
    }, [])

//--------------------------------------------------------------------------------------------------------------------------------------------

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
                            <button className="edit-btn" data-id={category.category_id}  onClick={()=>{ 
                                openEditModal()
                                setId(category.category_id)
                                }} >
                                <img src={Edit} alt="" />
                            </button>
                            <button key={i} data-id={category.category_id} className="delete-btn"  onClick={(e)=> 
                               {
                                openDeleteModal()
                                setId(category.category_id)
                               }
                                } >
                                <img src={Delete} alt="" /></button>
                        </td>


                       
                    </tr>
         ))}

                </tbody>
            </table>


        </div>
        <button className="btns" onClick={()=> openAddModal() }>Qo'shish</button>


        <Modal show={deleteModal} w={400} mh={120}>
                            <div className="delete-box">
                                <h2 className="delete-title">Haqiqatdan ham o'chirmoqchimisiz ?
                                </h2>
                                <div className="delete-footer">
                                    <button className="delete-no" data-id={id} onClick={()=>{
                                        openDeleteModal()

                                    }}>
                                        Yo'q
                                    </button>
                                    <button className="delete-yes" data-id={id} onClick={(e) => delete_category(e.target.dataset.id)} type="submit">
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
                                        Kategoriya nomi
                                    </p>
                                    <input type="text" className="modal-input" value={info.name} name="name"  onChange={setdata } required placeholder="masalan: Model B" />
                                    <div className="modal-box">
                                        <p className="modal-subtext">Holat</p>
                                        <div className="toggle">

                                            <input type="checkbox" id="holat" value={info.status} name="status"  onChange={setdata }  />
                                            <label className="toggle-label" for="holat">Toggle</label>

                                        </div>
                                 </div>

                                    <button  data-id={id} type="button" onClick={(e) => {
                                                  e.preventDefault()
                                                  update_category(e.target.dataset.id ,info.name) }} className="modal-btn">
                                        Tahrirlash
                                    </button>
                                </form>
                            </div>
                        </Modal>



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
                    <input type="text" className="modal-input" value={info.name} name="name"  onChange={setdata } required placeholder="masalan: Model B" />
                    <div className="modal-box">
                        <p className="modal-subtext">Holat</p>
                        <div className="toggle">

                            <input type="checkbox" id="holat" value={info.status} name="status"  onChange={setdata }  />
                            <label className="toggle-label" for="holat">Toggle</label>

                        </div>
                    </div>

                    <button type="button" onClick={(e) => {
                         e.preventDefault()
                         createCategory(info.name, info.status) }}  className="modal-btn">
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