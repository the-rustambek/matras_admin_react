import react from "react";
import Toggle from "../Toggle/Toggle";
import Edit from "../../Assets/Images/edit.png";
// import TrComponent from "../TrComponent/TrComponent";
import "./ToifalarTable.css";
import Delete from "../../Assets/Images/delete.png";

const ToifalarTable = ({items}) =>{
    // console.log(items,"aloooo")

return (
    <>
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
                {/* <TrComponent /> */}

                {items.map((menuItem) =>{
const {id,title,number,name,quantity,toifalar} = menuItem;
       return(
       <>
                
        <tr className="tr" key={id} >
        <td className="td-left">{toifalar}</td>
        <div className="tr-toifalar">
        
        <td className="td">
        <button className="edit-btn">
                <img src={Edit} alt="" />
            </button>
        <button className="delete-btn">
                <img src={Delete} alt="" />
            </button>
        </td>
        </div>
        
    </tr>
         </>
         )
        })}
        
            </tbody>
        </table>

    </div>




</section>
<button className="add-btn">Qo'shish</button>
</>

)
}

export default ToifalarTable;