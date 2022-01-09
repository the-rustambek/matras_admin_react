import react from "react";
import "./MahsulotlarTable.css";
import Toggle from "../Toggle/Toggle";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import MahsulotAdd from "./MahsulotAdd";

const MahsulotlarTable = ({items,children}) =>{
    console.log(children)


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

                {items.map((menuItem) =>{
const {id,title,number,name,quantity,toifalar,price,weight,size} = menuItem;
       return(
       <>
                
        <tr className="tr" key={id} >
        
        <td>{name}</td>
        <td>{toifalar}</td>
        <td>{price}</td>
        <td>{weight}</td>
        <td>{size}</td>
        <td className="td-right">
        <Toggle key={id} />
        </td>
        <td className="td">
            <EditModal key={id} />
        
            <DeleteModal key={id} />
        </td>
    </tr>
         </>
         )
        })}
        
            </tbody>
        </table>

    </div>
    {children}
<MahsulotAdd />

</section>

)
}


export default MahsulotlarTable;