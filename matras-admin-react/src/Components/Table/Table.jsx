import react from "react";
import Toggle from "../Toggle/Toggle";

// import TrComponent from "../TrComponent/TrComponent";
import "./Table.css";
const Table = ({items}) =>{
    // console.log(items,"aloooo")

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
                {/* <TrComponent /> */}

                {items.map((menuItem) =>{
const {id,title,number,name,quantity} = menuItem;
       return(
       <>
                
        <tr className="tr" key={id} >
        <td>{id}</td>
        <td>{title}</td>
        <td>{number}</td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>
        <Toggle key={id} />
        </td>
    </tr>
         </>
         )
        })}
        
            </tbody>
        </table>

    </div>


</section>

)
}

export default Table;