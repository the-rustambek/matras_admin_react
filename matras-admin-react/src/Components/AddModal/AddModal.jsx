import { useState } from "react";
import Modal from "react-modal";
import "../ToifalarTable/ToifalarTable.css";
import Toggle from "../Toggle/Toggle";
import Close from "../../Assets/Images/Close.png";

const AddModal = () =>{
    const [modalIsOpen,setModalIsOpen] = useState(false);
     return(
        <>
<button className="add-btn" onClick={() => setModalIsOpen(true)} >Qo'shish</button>
<Modal className="modal" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)}  style={{
    overlay:{
        backgroundColor: "rgb(233,224,224,0.9)"
    }
    
}}>
    <div className="modal-blok">
    <div className="modal-close">
        <button  onClick={() =>setModalIsOpen(false)}>
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
    <Toggle />
</div>

<button type="submit" className="modal-btn">
    Qo'shish
</button>
    </form>
    </div>
</Modal>

        </>
    )
}

export default AddModal;
