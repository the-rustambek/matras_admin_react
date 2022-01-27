import  { useEffect, useState } from "react"; 
import Toggle from "../Toggle/Toggle";
import "../Toggle/Toggle.css"
import constants from "../../configs/constants";


// import TrComponent from "../TrComponent/TrComponent";
import "./Table.css"; 


const Table = ({items}) =>{
    const [data, setData] = useState([]); 

    const getOrders = async() => {
        let token = window.localStorage.getItem("token")

		let response = await fetch(constants.API_URL+"/v1/orders",{
			method: "GET", 
			headers: {
				"Content-Type": "application/json",
                "Authorization": token
			}
		})
 
		response = await response.json(); 
		if(response?.data.order){
            console.log(response?.data.order);
            setData(response?.data.order)
        }
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
            
            getOrders()
        }
    } 

    useEffect(async () => {
       await getOrders()  
    }, []) 

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
                {data.length > 0 && data.map((order,i) =>(
                <tr className="tr" key={i}>
                    <td className="td-left">{order.order_id}</td>
                    <td>{order.user_name}</td>
                    <td>{order.user_phone}</td>
                    <td>{order.order_name}</td>
                    <td>{order.order_amount}</td>
                    <td className="td-right">
                        <div className="toggle"> 
                            <input type="checkbox" id={order.order_contacted} />
                            <label className="toggle-label" htmlFor={order.order_contacted}>Toggle</label> 
                        </div>
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