import  { useEffect, useState } from "react";


// import TrComponent from "../TrComponent/TrComponent";
import "./CustomersTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import  "../Toggle/Toggle.css";
import Delete from "../../Assets/Images/delete.png";

import Modal from "../Modal/Modal";
const CustomersTable = () =>{
    // console.log(items,"aloooo")

    const [data,setData] = useState([]);
    const [deleteModal,setDeleteModal] = useState(false);
    
    function openDeleteModal(){
        setDeleteModal(!deleteModal);
    }

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
        <td className="td th-toggle">
        <div className="toggle">

<input type="checkbox"  id={row.id} />
    <label className="toggle-label" for={row.id}>Toggle</label>

</div></td>
        
        <td className="td td-right">
        <button className="delete-btn" key={i} onClick={() => openDeleteModal()}>
            <img src={Delete} alt="" /> </button>
        </td>
    </tr>
                         ))}

        
            </tbody>
        </table>

    </div>


                    <Modal show={deleteModal} w={400} mh={120}>
                        <div className="delete-box">
                            <h2 className="delete-title">
                                Haqiqatdan ham o'chirmoqchimisiz ? 
                            </h2>
                            <div className="delete-footer">
                    <button className="delete-no" onClick={()=>openDeleteModal()}>
                        Yo'q
                    </button>
                    <button className="delete-yes" type="submit">
                        Ha
                    </button>
                </div>

                        </div>
                    </Modal>


</section>

)
}

export default CustomersTable;