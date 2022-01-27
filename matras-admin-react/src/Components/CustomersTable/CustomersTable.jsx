import  { useEffect, useState } from "react";
import "./CustomersTable.css";
import  "../Toggle/Toggle.css";
import Delete from "../../Assets/Images/delete.png";
import CustomerService from "../../services/CustomersServise"
import constants from "../../configs/constants";


import Modal from "../Modal/Modal";
const CustomersTable = (props) =>{ 
    const [data, setData] = useState([]); 

    const getCustomers = async() => {
      let result = await CustomerService.GetCustomers(); 
      setData(result?.data?.customers)
       
    } 

    const deleteCustomerService = async(id) => {
        let token = window.localStorage.getItem("token") 
		let response = await fetch(constants.API_URL+`/v1/customers/delete/${id}`,{
			method: "DELETE", 
			headers: {
				"Content-Type": "application/json",
                "Authorization": token
			}
		})  


        response = await response.json();
        console.log(response);
        if(response.ok == true) {
            openDeleteModal()
            getCustomers()
        }
    } 

    useEffect(async () => {
       await getCustomers()  
    }, []) 
    
    const [deleteModal,setDeleteModal] = useState(false);
    
    function openDeleteModal(){
        setDeleteModal(!deleteModal);
    }

    // useEffect(() =>{
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((data) => setData(data))
    // },[])

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
                {data.length > 0 && data.map((customer, i) =>(      
                    <tr className="tr" key={i} >
                    <td className="td td-id">{customer.customer_id}</td>
                    <td className="td">{customer.customer_contact_date}</td>
                    <td className="td">{customer.customer_number}</td>
                    <td className="td th-toggle">
                    <div className="toggle">

                    <input type="checkbox"  id={i} />
                        <label className="toggle-label" for={i}>Toggle</label> 
                    </div></td>
                            
                            <td className="td td-right">
                                <button className="delete-btn" key={i} onClick={() => openDeleteModal()}>
                                    <img src={Delete} alt="" /> 
                                </button>

                                
                            <Modal show={deleteModal} w={400} mh={120}>
                                    <div className="delete-box">
                                        <h2 className="delete-title">
                                            Haqiqatdan ham o'chirmoqchimisiz ? 
                                        </h2>
                                        <div className="delete-footer">
                                <button className="delete-no" onClick={()=>openDeleteModal()}>
                                    Yo'q
                                </button>
                                <button className="delete-yes" onClick={() => deleteCustomerService(customer.customer_id) } type="submit">
                                    Ha
                                </button>
                            </div>

                        </div>
                    </Modal>
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