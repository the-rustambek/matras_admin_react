import Toggle from "../Toggle/Toggle.css";
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
        <div className="toggle">

<input type="checkbox"  id={row.id} />
    <label className="toggle-label" for={row.id}>Toggle</label>

</div>
        </td>
    </tr>
         </div>
        })}
    </div>
    )
}

export default TrComponent;