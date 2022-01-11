import  { useEffect } from "react";
// import Toggle from "../Toggle/Toggle";
// import Edit from "../../Assets/Images/edit.png";
// import Close from "../../Assets/Images/Close.png";
// // import TrComponent from "../TrComponent/TrComponent";
// import "./ToifalarTable.css";
// import Delete from "../../Assets/Images/delete.png";
import { useState } from "react";
// import Modal from "react-modal";
import DeleteModal from "../DeleteModal/DeleteModal";

import AddModal from "../AddModal/AddModal";
import EditModal from "../EditModal/EditModal";

const ToifalarTable = ({items}) =>{
    // console.log(items,"aloooo")
    const [data,setData] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => setData(data))
    },[])

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
           
                {data.length > 0 && data.map((row,i) =>(

            
     
        <tr className="tr" key={i} >
        <td className="td-left">{row.username}</td>
        <div className="tr-toifalar">
        
        <td className="td">
            <EditModal key={row.id} className="edit-box" />
      
            <DeleteModal key={row.id} />
        </td>
        </div>
        
    </tr>
                ))}
        
            </tbody>
        </table>

    </div>




</section>
<AddModal  />


</div>

)
}

export default ToifalarTable;