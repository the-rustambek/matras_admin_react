import  { useEffect } from "react";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import AddModal from "../AddModal/AddModal";
import EditModal from "../EditModal/EditModal";
import "../TexnologiyalarTable/TexnologiyalarTable.css";

const TexnologiyalarTable = () =>{
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
           
                {data.length > 0 && data.map((row,i) =>(

            
     
        <tr className="tr" key={i} >
       <div className="td-left">
       <td className="">{row.username}</td>
        <td className="">{row.name}</td>
        <td className="">{row.email}</td>
       </div>
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

export default TexnologiyalarTable;