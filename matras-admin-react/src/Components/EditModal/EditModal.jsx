// import Toggle from "../Toggle/Toggle";
import Edit from "../../Assets/Images/edit.png";
import Close from "../../Assets/Images/Close.png";
// import TrComponent from "../TrComponent/TrComponent";
import "../ToifalarTable/ToifalarTable.css";
import { useState } from "react";
import Modal from "react-modal";

const EditModal = () =>{
const [edit,setEdit] = useState(false);
return(
<>
    <button className="edit-btn" onClick={()=> setEdit(true)}>
        <img src={Edit} alt="" />
    </button>
    <Modal className="modal" isOpen={edit} shouldCloseOnOverlayClick={false} onRequestClose={()=>setEdit(false)} style={{
    overlay:{
        backgroundColor: "rgb(233,224,224,0.9)"
    }
    
}} >
        <div className="modal-blok">
            <div className="modal-close">
                <button onClick={()=>setEdit(false)}>
                    <img src={Close} className="close-icon" alt="" />
                </button>
            </div>
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
</>
)
}

export default EditModal;