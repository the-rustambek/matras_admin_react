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
                    <input type="checkbox" id="switch" />
                    <label for="switch">Toggle</label>
                    </td>
                </tr>
                {/* <tr className="tr">
                    <td>7</td>
                    <td>Jenqwqw </td>
                    <td>+998 93 148 77 33</td>
                    <td>Ortopedik Eko matras</td>
                    <td>4</td>
                    <td>
                    <input type="checkbox" id="switch" />
                    <label for="switch">Toggle</label>
                    </td>
                </tr>
                <tr className="tr">
                    <td>8</td>
                    <td>JeWilson </td>
                    <td>+998 93 148 77 33</td>
                    <td>Ortopedik Eko matras</td>
                    <td>4</td>
                    <td>
                    <input type="checkbox" id="switch" />
                    <label for="switch">Toggle</label>
                    </td>
                </tr>
                <tr className="">
                    <td>8</td>
                    <td>nyeWilson </td>
                    <td>+998 93 148 77 33</td>
                    <td>Ortopedik Eko matras</td>
                    <td>4</td>
                    <td>
                    <input type="checkbox" id="switch" />
                    <label for="switch">Toggle</label>
                    </td>
                </tr> */}



            </tbody>
        </table>

    </div>


</section>

)
}

export default Table;