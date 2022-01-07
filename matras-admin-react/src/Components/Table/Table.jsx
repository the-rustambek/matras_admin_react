import react from "react";

import TrComponent from "../TrComponent/TrComponent";
import "./Table.css";
const Table = () =>{

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
                <TrComponent />
            </tbody>
        </table>

    </div>


</section>

)
}

export default Table;