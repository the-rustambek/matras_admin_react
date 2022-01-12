import { useEffect } from "react";
import "./MahsulotlarTable.css";

import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import MahsulotAdd from "./MahsulotAdd";
import { useState } from "react";
import "../Toggle/Toggle.css"
const MahsulotlarTable = () =>{
    // console.log(children)

    const [data,setData] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) =>setData(data))
    },[])

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
                {/* <TrComponent /> */}

                {data.length > 0 && data.map((row,i)=>(
       
        <tr className="tr" key={row.i} >
        
        <td>{row.name}</td>
        <td>{row.username}</td>
        <td>{row.id*10000} so'm </td>
        <td>{row.id *100} kg</td>
        <td>{row.id*15}x{row.id*15}x{row.id*15}</td>
        <td className="td-right">
        <div className="toggle">

<input type="checkbox"  id={row.id} />
    <label className="toggle-label" for={row.id}>Toggle</label>

</div>
        </td>
        <td className="td">
            <EditModal key={row.id} />
        
            <DeleteModal key={row.id } />
        </td>
    </tr>
         
         
         ))}
        
            </tbody>
        </table>

    </div>
    
<MahsulotAdd />

</section>

)
}


export default MahsulotlarTable;