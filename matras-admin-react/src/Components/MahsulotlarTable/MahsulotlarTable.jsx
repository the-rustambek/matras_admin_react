import { useEffect } from "react";
import "./MahsulotlarTable.css";
import { useState } from "react";
import "../Toggle/Toggle.css";
import Edit from "../../Assets/Images/edit.png";
import Close from "../../Assets/Images/Close.png";
import Delete from "../../Assets/Images/delete.png";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
;


const MahsulotlarTable = () =>{
// console.log(children)
const onChange = (e) =>{
console.log(e.target.files);
}

const [users,setUsers] = useState([]);
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
    fetchData();
},[])

const fetchData = async () =>{
    await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => setUsers(data))
    .catch((err) =>{
        console.log(err)
    })
}




return (
<section className="tables">
    <div className="tbl-header">
        <table>
            <thead>
                <tr>
                    <th>Mahsulot nomlari</th>
                    <th>Toifalar</th>
                    <th>Narxi</th>
                    <th>Yuklama</th>
                    <th>Razmeri</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
        </table>
    </div>
    <div className="tbl-content">
        <table>
            <tbody>
                {/*
                <TrComponent /> */}

                {users.length > 0 && users.map((row,i)=>(

                <tr className="tr" key={row.id}>

                    <td>{row.name}</td>
                    <td>{row.username}</td>
                    <td>{row.id*10000} so'm </td>
                    <td>{row.id *100} kg</td>
                    <td>{row.id*15}x{row.id*15}x{row.id*15}</td>
                    <td className="td-right">
                        <div className="toggle">

                            <input name="mahsulot_nomi" name="toggle" type="checkbox" id={row.id} />
                            <label className="toggle-label" for={row.id}>Toggle</label>

                        </div>
                    </td>
                    <td className="td">
                        <button className="edit-btn" key={row.id} onClick={()=> openEditModal()} >
                            <img src={Edit} alt="" />
                        </button>
                        <button key={row.id} className="delete-btn"  onClick={()=> openDeleteModal()}  >
                            <img src={Delete} alt="" /></button>

                    </td>
                </tr>


                ))}

            </tbody>
        </table>

    </div>

    <button className="adds-buttons"  onClick={()=> openAddModal() }   >

        Qo'shish

    </button>

    <Modal show={deleteModal} w={400} mh={120} >
        <div className="delete-box">
            <h2 className="delete-title">Haqiqatdan ham o'chirmoqchimisiz ?
            </h2>
            <div className="delete-footer">
                <button className="delete-no" onClick={()=>openDeleteModal()}>
                    Yo'q
                </button>
                <button type="submit" className="delete-yes"   >
                    Ha
                </button>
            </div>
        </div>
    </Modal>

    <Modal show={editModal} w={580} mh={380}>
        <div className="modal-blok">
            {/* salom */}
            {/* <div className="modal-closes"> */}
                <button className="close-btn" onClick={()=>setEditModal()}>
                    <img src={Close} className="close-icon" alt="" />
                </button>
                {/* </div> */}
            <h2 className="modal-title">Mahsulotlarni tahrirlash</h2>
            <form className="modal-form" method="POST" encType="multipart/form-data">

                <ul className="modal-list">

                    <li className="modal-item modal-items">

                        <p>
                            Mahsulot nomlari
                        </p>
                        <Input name="mahsulot_nomi" type="text" placeholder="Masalan: Kevin" />

                        <p>
                            Toifalar
                        </p>
                        <Input name="toifalar_nomi" type="text" placeholder="Masalan: Model C" />


                        <p>
                            Narxi
                        </p>
                        <Input name="mahsulot_price" type="text" placeholder="Masalan: 20 000" />




                    </li>
                    <li className="modal-item modal-items">
                        <p>
                            Yuklama
                        </p>
                        <Input name="mahsulot_size" type="text" placeholder="Masalan: 200 kg" />
                        <p>
                            Razmeri
                        </p>
                        <Input name="mahsulot_razmeri" type="text" placeholder="masalan: 200 x 140 x 40" />

                        <div className="modal-footer modal-footers">
                            <p className="modal-subtext">Status</p>
                            <div className="toggle">

                                <input name="toggle" type="checkbox" id="active" />
                                <label className="toggle-label" for="active">Toggle</label>

                            </div>
                        </div>
                        <button className="add-button">Qo'shish</button>




                    </li>


                </ul>

            </form>
        </div>
    </Modal>

    <Modal  show={addModal} w={300}>

        <div className="mahsulot-box">
            <div className="mahsulot-close">
                <button className="mahsulot-close-btn" onClick={()=>setAddModal()}>

                    <img src={Close} className="close-icon" alt="" />
                </button>
            </div>
            <h2 className="mahsulot-title">
                Qo'shish
            </h2>
            <div className="modal-blok">
                <form className="modal-form" method="POST" encType="multipart/form-data">

                    <ul className="modal-list">
                        <li className="modal-item modal-img">
                            {/* <img src={Image} alt="" /> */}


                            <input name="file" accept=".jpg,.png, .jpeg, .svg, .webp77  7" className="multiple-input" multiple
                                type="file" onChange={onChange} />
                        </li>
                        <li className="modal-item modal-items">
                            <p>
                                Toifalar
                            </p>
                         
                            <select className="modal-select" name="toifalar_nomi">
                                <option value="Model C" >Model C</option>
                                <option value="Model A" >Model A</option>
                                <option value="Model B">Model B</option>
                                <option value="Model D">Model D</option>
                            </select>
                            <p>
                                Tovar nomi
                            </p>
                            <Input type="text" placeholder="Lux soft memory" name="tovar_nomi" />

                            <p>
                                Narxi
                            </p>
                            <Input name="mahsulot_price" type="text" placeholder="Masalan: 20 000"  />


                            <p>
                                Yuklama
                            </p>
                            <Input name="mahsulot_weight" type="text" placeholder="Masalan: 200 kg" />

                        </li>
                        <li className="modal-item modal-items">

                            <p>
                                Razmeri
                            </p>
                            <Input name="mahsulot_razmeri" type="text" placeholder="masalan: 200 x 140 x 40" />

                            <p>
                                Kafolat
                            </p>
                            <Input name="mahsulot_kafolat" type="text" placeholder="Masalan:  1 yil" />


                            <p>
                                Sig'im
                            </p>
                            <Input name="mahsulot_sigim" type="text" placeholder="Masalan: 2" />
                            <p>
                                Aksiya narxi
                            </p><Input name="mahsulot_aksiya_price" type="text" placeholder="Masalan: 1 200 000 so'm" />

                        </li>
                        <li className="modal-item">
                            <p>Ma'lumot</p>

                            <textarea placeholder="Info..." required>

                            </textarea>
                            <div className="modal-footer">
                                <p className="modal-subtext">New</p>
                                <div className="toggle">

                                    <input name="mahsulot_toggle" type="checkbox" id="new" />
                                    <label className="toggle-label" for="new">Toggle</label>

                                </div>
                            </div>
                            <div className="modal-footer modal-footers">
                                <p className="modal-subtext">Active</p>
                                <div className="toggle">

                                    <input  name="toggle" type="checkbox" id="active" />
                                    <label className="toggle-label" for="active">Toggle</label>

                                </div>
                            </div>
                            <button className="add-button" >Qo'shish</button>
                        </li>

                    </ul>

                </form>
            </div>
        </div>

    </Modal>

</section>

)
}


export default MahsulotlarTable;