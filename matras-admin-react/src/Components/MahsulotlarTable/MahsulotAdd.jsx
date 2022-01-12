import react from "react";
import { useState } from "react";
import Modal from "react-modal";
import "./MahsulotlarTable.css";

import Close from "../../Assets/Images/Close.png";

import Image from "../../Assets/Images/Image.png";
import Input from "../Input/Input";
import Toggle from "../Toggle/Toggle.css";


const MahsulotAdd = () =>{
const onChange = (e) =>{
console.log(e.target.files);
}

const [mahsulotAddModal,setMahsulotAddModal] = useState(false);
return(
<>
    <button className="add-btn" onClick={()=> setMahsulotAddModal(true) }>

        Qo'shish

    </button>
    <Modal className="mahsulot-modal" isOpen={mahsulotAddModal} shouldCloseOnOverlayClick={false} onRequestClose={()=>
        setMahsulotAddModal(false)} style={{
    overlay:{
        backgroundColor: "rgb(233,224,224,0.9)"
    }
    
}} >

        <div className="mahsulot-box">
            <div className="mahsulot-close">
                <button className="mahsulot-close-btn" onClick={()=> setMahsulotAddModal(false)}>

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


                            <input className="multiple-input" multiple type="file" onChange={onChange} />
                        </li>
                        <li className="modal-item modal-items">
                            <p>
                                Toifalar
                            </p>
                            {/* <Input type="text" placeholder="Masalan: Model C" /> */}
                            <select className="modal-select">
                                <option value="Model C">Model C</option>
                                <option value="Model A">Model A</option>
                                <option value="Model B">Model B</option>
                                <option value="Model D">Model D</option>
                            </select>
                            <p>
                                Tovar nomi
                            </p>
                            <Input type="text" placeholder="Lux soft memory" />

                            <p>
                                Narxi
                            </p>
                            <Input type="text" placeholder="Masalan: 20 000" />


                            <p>
                                Yuklama
                            </p>
                            <Input type="text" placeholder="Masalan: 200 kg" />

                        </li>
                        <li className="modal-item modal-items">

                            <p>
                                Razmeri
                            </p>
                            <Input type="text" placeholder="masalan: 200 x 140 x 40" />

                            <p>
                                Kafolat
                            </p>
                            <Input type="text" placeholder="Masalan:  1 yil" />


                            <p>
                                Sig'im
                            </p>
                            <Input type="text" placeholder="Masalan: 2" />
                            <p>
                                Aksiya narxi
                            </p><Input type="text" placeholder="Masalan: 1 200 000 so'm" />

                        </li>
                        <li className="modal-item">
                            <p>Ma'lumot</p>

                            <textarea placeholder="Info..." required>

                            </textarea>
                            <div className="modal-footer">
                                <p className="modal-subtext">New</p>
                                <div className="toggle">

                                    <input type="checkbox" id="new" />
                                    <label className="toggle-label" for="new">Toggle</label>

                                </div>
                            </div>
                            <div className="modal-footer modal-footers">
                                <p className="modal-subtext">Active</p>
                                <div className="toggle">

                                    <input type="checkbox" id="active" />
                                    <label className="toggle-label" for="active">Toggle</label>

                                </div>
                            </div>
                            <button className="add-btns">Qo'shish</button>
                        </li>

                    </ul>

                </form>
            </div>
        </div>


    </Modal>
</>
)
}

export default MahsulotAdd;