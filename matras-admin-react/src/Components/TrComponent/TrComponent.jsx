import react from "react";
import Toggle from "../Toggle/Toggle";
import items from "../../data";

const TrComponent = ({items}) =>{
    return  (<div>
        {items.map((menuItem) =>{
const {id,title,number,name,category,quantity,img} = menuItem;
         <div className="">
                
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
         </div>
        })}
    </div>
    )
}

export default TrComponent;