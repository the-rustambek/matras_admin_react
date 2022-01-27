import { useEffect } from "react";
import { useState } from "react";
import "../TexnologiyalarTable/TexnologiyalarTable.css";
import Edit from "../../Assets/Images/edit.png";
import Close from "../../Assets/Images/Close.png";
import Delete from "../../Assets/Images/delete.png";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import constants from "../../configs/constants";
;



const TexnologiyalarTable = () =>{

const [deleteModal,setDeleteModal] = useState(false);
const [editModal,setEditModal] = useState(false);
const [addModal,setAddModal] = useState(false);
const [id, setId] = useState("")


const [info,setInfo]= useState({name:"",description:"",rasm:"",video:"", status: true});

// const [info,setInfo]= useState({name:"", status: true});
const setdata = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setInfo((preval) => {
        return {
            ...preval,
            [name]: value
        }
    })
}

const [data,setData] = useState([]);

function openDeleteModal(){
setDeleteModal(!deleteModal)
}
function openEditModal(){
setEditModal(!editModal)
}

function openAddModal(){
  setAddModal(!addModal)
}

const getTechnologies = async() => {
    let token = window.localStorage.getItem("token")

    let response = await fetch(constants.API_URL+"/v1/technologies",{
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    "Authorization": token
    }
    })
    response = await response.json();
    console.log(response);
    if(response?.data.technologies){
    setData(response?.data.technologies)
}
}



const createTechnology = async(name,description,rasm,video) => {
        let token = window.localStorage.getItem("token")

        let response = await fetch(constants.API_URL+"/v1/technologies",{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": token
        },
        body: JSON.stringify({
            technology_name: name,
            technology_description:description,
            technology_photo_link:rasm,
            technology_video_link:video,
            technology_status: "active"
})

})

        response = await response.json(); 
        console.log(response,"add qoshildi")
        if(response?.ok === true){
             getTechnologies()
             openAddModal()
        }
}


const delete_technology = async(id) =>{
    let token = window.localStorage.getItem("token");
    
    let response = await fetch(constants.API_URL+`/v1/technologies/${id}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": token
        }
    })

    response = await response.json();
    console.log(response);
    if(response.ok == true){
        openDeleteModal();
        getTechnologies()
    }
}

const update_technology = async(id,name,description,rasm,video) =>{
    let token =  window.localStorage.getItem("token");

    let response = await fetch(constants.API_URL+`/v1/technologies/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({
            technology_name: name,
            technology_description:description,
            technology_photo_link:rasm,
            technology_video_link:video,
            technology_status: "active"

        })
    })
    response = await response.json();
    console.log(response);
    if(response.ok == true) {
    openEditModal()
    getTechnologies()
}
}


useEffect(async () => {
await getTechnologies()
}, [])


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

                    {data.length > 0 && data.map((technology,i) =>(



                    <tr className="tr" key={i}>
                        <div className="td-left">
                            <td className="">{technology.technology_name}</td>
                            <td className="">{technology.technology_description}</td>
                            <td className="">{technology.technology_video_link}</td>
                        </div>
                        <div className="tr-toifalar">

                            <td className="td">
                                <button className="edit-btn edit-box" key={i} data-id={technology.technology_id}  onClick={()=>{ 
                                openEditModal()
                                setId(technology.technology_id)
                                }
                                
                                }
                                    >
                                    <img src={Edit} alt="" />
                                </button>
                                <button className="delete-btn" key={technology.id} onClick={(e)=>{ openDeleteModal()                     
                                setId(technology.technology_id)}} >
                                    <img src={Delete} alt="" /></button>

                            </td>
                        </div>

                    </tr>
                    ))}

                </tbody>
            </table>

        </div>




    </section>
    <button className="add-buttons" onClick={()=> openAddModal() }>Qo'shish</button>


    <Modal show={deleteModal} w={400} mh={120}>
        <div className="delete-box">
            <h2 className="delete-title">Haqiqatdan ham o'chirmoqchimisiz ?
            </h2>
            <div className="delete-footer">
                <button className="delete-no"data-id={id} onClick={()=>openDeleteModal()}>
                    Yo'q
                </button>
                <button className="delete-yes"data-id={id} type="submit" onClick={(e) => delete_technology(e.target.dataset.id)}>
                    Ha
                </button>
            </div>
        </div>
    </Modal>
    <Modal show={editModal} w={300} mh={400}>
        <div className="modal-blok">
            
                <button className="close-btn" onClick={()=>setEditModal()}>
                    <img src={Close} className="close-icon" alt="" />
                </button>
                {/* </div> */}
            <h2 className="modal-title">Texnologiyalarni tahrirlash</h2>
            <form className="modal-form">

                <p className="form-text">
                    Nomlari
                </p>
                <Input type="text" name="name" value={info.name} onChange={setdata} placeholder="Masalan: Kevin" />

                <p className="form-text">
                    Matn
                </p>
                <Input  name="description" value={info.description} onChange={setdata}  type="text" placeholder="Masalan: Modede  " />

                <p className="form-text">
                    rasm
                </p>
                <Input  name="rasm" value={info.rasm} onChange={setdata}  type="text" placeholder="Masalan: https://t.me/it_time" />

                <p className="form-text">
                    Video
                </p>
                <Input  name="video" value={info.video} onChange={setdata}  type="text" placeholder="Masalan: https://t.me/it_time" />

                <div className="modal-box">
                    <p className="modal-subtext">Holat</p>
                    <div className="toggle">

                        <input  name="status" value={info.status} onChange={setdata}  type="checkbox" id="holat" />
                        <label className="toggle-label" for="holat">Toggle</label>

                    </div>
                </div>

                <button data-id={id} type="button" 
                onClick={(e) => {
                e.preventDefault()
                    update_technology(e.target.dataset.id ,info.name,info.description,info.rasm,info.video) }} className="modal-btn ">
                    Tahrirlash
                </button>
            </form>
        </div>
    </Modal>

    <Modal show={addModal} w={500} mh={370}>
        <div className="modal-blok">


            <button className="close-btn" onClick={()=>openAddModal()}>
                <img src={Close} className="close-icon" alt="" />
            </button>

            <h2 className="modal-title">Qo'shish</h2>
            <form className="modal-form">
                <div className="modal-header">
                    <div className="modal-left">
                        <p className="modal-text">
                            Nomi
                        </p>
                        <input type="text" name="name" value={info.name} onChange={setdata }className="modal-input"
                            required placeholder="masalan: Menory foam" />
                        <p className="modal-text">
                            Description
                        </p>
                        <input name="description" value={info.description} onChange={setdata } type="text"
                            className="modal-input" required placeholder="masalan: Menory desc" />
                    </div>
                    <div className="modal-right">
                        <p className="modal-text">
                            Rasm
                        </p>
                        <input name="rasm" onChange={setdata } type="text" value={info.rasm} className="modal-input"
                            required placeholder="Rasm url" />
                        <p className="modal-text">
                            Video
                        </p>
                        <input name="video" onChange={setdata } type="text" value={info.video} className="modal-input"
                            required placeholder="Video url" />
                    </div>
                </div>
                <div className="modal-boxes">
                    <div className="modal-toggles">
                        <div className="modal-subtext">Holat</div>
                        <div className="toggle">

                            <input onChange={setdata } name="status" value={info.status} type="checkbox" id="holat" />
                            <label className="toggle-label" for="holat">Toggle</label>
                        </div>
                    </div>

                    <div className="">
                        <button type="button" className="modal-btn" onClick={(e)=> {
                            e.preventDefault()
                            createTechnology(info.name,info.rasm, info.video, info.description, info.status) }}>
                            Qo'shish
                        </button>
                    </div>
                </div>



            </form>
        </div>
    </Modal>
</div>

)}


export default TexnologiyalarTable;