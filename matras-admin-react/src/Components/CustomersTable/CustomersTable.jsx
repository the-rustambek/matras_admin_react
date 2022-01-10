import react, { useEffect, useState } from "react";
import Toggle from "../Toggle/Toggle";
import Delete from "../../Assets/Images/delete.png"
// import TrComponent from "../TrComponent/TrComponent";
import "./CustomersTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";

const CustomersTable = ({items}) =>{
    // console.log(items,"aloooo")

    const [data,setData] = useState([]);
    
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((data) => setData(data))
    },[])

return (
<section className="tables">
    <div className="tbl-header">
        <table>
            <thead>
                <tr>
                    <th className="th th-id">ID</th>
                    <th className="th th-left">Sana</th>
                    <th className="th  th-left">Telefon Raqami</th>
                    <th className="th th-left ">Qayta Aloqa</th>
                    <th className="th th-left"></th>
                </tr>
            </thead>
        </table>
    </div>
    <div className="tbl-content">
        <table>
            <tbody>
                

                {data.length > 0 && data.map((row,i) =>(


                
        <tr className="tr" key={i} >
        <td className="td td-id">{row.id}</td>
        <td className="td">{row.id}</td>
        <td className="td">{row.id + `${31487733}`}</td>
        <td className="td th-toggle"><Toggle key={row.id} /></td>
        
        <td className="td td-right">
        <DeleteModal key={i} />
        </td>
    </tr>
                         ))}

        
            </tbody>
        </table>

    </div>


</section>

)
}

export default CustomersTable;