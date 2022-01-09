import react from "react";
import Toggle from "../Toggle/Toggle";
import Edit from "../../Assets/Images/edit.png";
import Close from "../../Assets/Images/Close.png";
// import TrComponent from "../TrComponent/TrComponent";
import "./ToifalarTable.css";
import Delete from "../../Assets/Images/delete.png";
import { useState } from "react";
import Modal from "react-modal";
import DeleteModal from "../DeleteModal/DeleteModal";

import AddModal from "../AddModal/AddModal";
import EditModal from "../EditModal/EditModal";

const ToifalarTable = ({items}) =>{
    // console.log(items,"aloooo")

// const [modalDelete,setModalDelete] = useState(false);
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
            <EditModal key={id} className="edit-box" />
        {/* <button className="edit-btn">
                <img src={Edit} alt="" />
            </button> */}
        {/* <button  className="delete-btn" key={id} onClick={() => setModalDelete(true)} >
                <img src={Delete} alt="" />
            </button> */}
            <DeleteModal key={id} />
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
<AddModal  />


</div>

)
}

export default ToifalarTable;