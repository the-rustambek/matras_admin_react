import react from "react";
import { useState } from "react";
import Modal from "react-modal";
import "./MahsulotlarTable.css";

import Close from "../../Assets/Images/Close.png";

import Image from "../../Assets/Images/Image.png";

const MahsulotAdd = () =>{

    const [mahsulotAddModal,setMahsulotAddModal] = useState(false);
return(
    <>
    <button className="add-btn" onClick={() => setMahsulotAddModal(true) }>

        Qo'shish

    </button>
    <Modal className="mahsulot-modal" isOpen={mahsulotAddModal} shouldCloseOnOverlayClick={false} onRequestClose={() => setMahsulotAddModal(false)}  style={{
    overlay:{
        backgroundColor: "rgb(233,224,224,0.9)"
    }
    
}}  >

    <div className="mahsulot-box">
        <div className="mahsulot-close">
            <button onClick={() => setMahsulotAddModal(false)}>

                <img src={Close} className="close-icon" alt="" />
            </button>
        </div>
        <h2 className="mahsulot-title">
            Qo'shish
        </h2>
        <div className="modal-blok">
            <img src={Image} alt="" />
        </div>
    </div>


    </Modal>
    </>
)
}

export default MahsulotAdd;