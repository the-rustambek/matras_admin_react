import  { useEffect } from "react";
import Toggle from "../Toggle/Toggle";


// import TrComponent from "../TrComponent/TrComponent";
import "./Table.css";
import { useState } from "react";


const Table = ({items}) =>{
    // console.log(items,"aloooo")
const [data,setData] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res) =>res.json()).then((data) => setData(data));
    },[])

return (
<section className="tables">
    <div className="tbl-header">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ismi</th>
                    <th>Telefon Raqami</th>
                    <th>Mahsulot Nomlari</th>
                    <th>Miqdor</th>
                    <th>Qayta Aloqa</th>
                </tr>
            </thead>
        </table>
    </div>
    <div className="tbl-content">
        <table>
            <tbody>
                {data.length > 0 && data.map((row,i) =>(

                
        <tr className="tr" key={i} >
        <td className="td-left">{row.id}</td>
        <td>{row.name}</td>
        <td>{row.phone}</td>
        <td>{row.username}</td>
        <td>{row.id+2}</td>
        <td className="td-right">
        <Toggle key={i} />
        </td>
    </tr>
         
         ))}
            </tbody>
        </table>

    </div>


</section>

)
}

export default Table;