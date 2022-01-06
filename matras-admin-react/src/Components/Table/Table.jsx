import react from "react";
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
                <tr className="tr">
                    <td>6</td>
                    <td>Jenny Wilson </td>
                    <td>+998 93 148 77 33</td>
                    <td>Ortopedik Eko matras</td>
                    <td>4</td>
                    <td>
                  

                        <div className="can-toggle demo-rebrand-2">
                            <input id="e" type="checkbox">
                            <label for="e">
                                <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
                         </label>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>

    </div>


</section>

)
}

export default Table;