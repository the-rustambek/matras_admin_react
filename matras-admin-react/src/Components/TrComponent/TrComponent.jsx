import react from "react";
import Toggle from "../Toggle/Toggle";

const TrComponent = () =>{
    return  (
        <tr className="tr" >
                    <td>6</td>
                    <td>Jenny Wilson </td>
                    <td>+998 93 148 77 33</td>
                    <td>Ortopedik Eko matras</td>
                    <td>4</td>
                    <td>
                    <Toggle />
                    </td>
                </tr>
    )
}

export default TrComponent;