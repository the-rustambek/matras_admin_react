import react from "react";
import Toggle from "../Toggle/Toggle";
import Edit from "../../Assets/Images/edit.png";
import Close from "../../Assets/Images/Close.png";
// import TrComponent from "../TrComponent/TrComponent";
import "./ToifalarTable.css";
import Delete from "../../Assets/Images/delete.png";
import { useState } from "react";
import Modal from "react-modal";

const ToifalarTable = ({items}) =>{
    // console.log(items,"aloooo")
const [modalIsOpen,setModalIsOpen] = useState(false);
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
                {/* <TrComponent /> */}

                {items.map((menuItem) =>{
const {id,title,number,name,quantity,toifalar} = menuItem;
       return(
       <>
                
        <tr className="tr" key={id} >
        <td className="td-left">{toifalar}</td>
        <div className="tr-toifalar">
        
        <td className="td">
        <button className="edit-btn">
                <img src={Edit} alt="" />
            </button>
        <button className="delete-btn">
                <img src={Delete} alt="" />
            </button>
        </td>
        </div>
        
    </tr>
         </>
         )
        })}
        
            </tbody>
        </table>

    </div>




</section>
<button className="add-btn" onClick={() => setModalIsOpen(true)} >Qo'shish</button>
<Modal className="modal" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)}  style={{
    overlay:{
        // backgroundColor: "grey"
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

<button type="button" className="modal-btn">
    Qo'shish
</button>
    </form>
    </div>
</Modal>
</div>

)
}

export default ToifalarTable;