import react from "react";
import Delete from "../../Assets/Images/delete.png";
import { useState } from "react";
import Modal from "react-modal";
import "../ToifalarTable/ToifalarTable.css"

const DeleteModal = () =>{
    const [modalDelete,setModalDelete] = useState(false);
    return(
        <>

<button  className="delete-btn"  onClick={() => setModalDelete(true)} >
                <img src={Delete} alt="" />
            </button>
            
<Modal className="delete-modal" isOpen={modalDelete} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalDelete(false)}  style={{
    overlay:{
        backgroundColor: "rgb(233,224,224,0.9)"
    }
    
}} >
<div className="delete-box">
    <h2 className="delete-title">Haqiqatdan ham o'chirmoqchimisiz ?
    </h2>
    <div className="delete-footer">
        <button className="delete-no" onClick={() =>setModalDelete(false)}>
            Yo'q
        </button>
        <button className="delete-yes" type="submit">
            Ha
        </button>
    </div>
</div>
            </Modal>
        </>
    )
}

export default DeleteModal;
