import react from "react";
import Toggle from "../Toggle/Toggle";
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
               

                <tr className="tr">
                    <td>6</td>
                    <td>Jenny Wilson </td>
                    <td>+998 93 148 77 33</td>
                    <td>Ortopedik Eko matras</td>
                    <td>4</td>
                    <td>
                    <Toggle />
                    </td>
                </tr>
                 <tr className="tr">
                    <td>6</td>
                    <td>Jenny Wilson </td>
                    <td>+998 93 148 77 33</td>
                    <td>Ortopedik Eko matras</td>
                    <td>4</td>
                    <td>
                    <Toggle />
                    </td>
                </tr>

            </tbody>
        </table>

    </div>


</section>

)
}

export default Table;