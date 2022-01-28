import { useContext, useEffect, useRef } from "react";
import "./MahsulotlarTable.css";
import { useState } from "react";
import "../Toggle/Toggle.css";
import Edit from "../../Assets/Images/edit.png";
import Close from "../../Assets/Images/Close.png";
import Delete from "../../Assets/Images/delete.png";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import SelectService from "../../services/SelectService";
import constants from "../../configs/constants";



const MahsulotlarTable = () =>{

    
    
   
    const [mahsulotStatus,setMahsulotStatus] = useState("");
    
  

    const [id, setId] = useState('');

    const [info, setInfo] = useState({
        // photos: [],
         id,
         name:"",
         narxi:"",
         yuklama:"",
         razmeri:"",
         kafolat:"",
         sigim:"",
         sale_price:"",
         aksiya:"",
         desc:"",
         status: true,
    });

    const setdata = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setInfo((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
        // const [toifalar, setToifalar] = useState([])
        // const [toifaError,setToifaError] = useState(false);

//         const getToifalar = async()=>{
//         let result = await SelectService.CategoryAdd();
//         // console.log(result.data.categories);
    
//         setToifalar(result.data.categories)  
        
// }



        const [users,setUsers] = useState([]);
        const [deleteModal,setDeleteModal] = useState(false);
        const [editModal,setEditModal] = useState(false);
        const [addModal,setAddModal] = useState(false);
        const [data, setData] = useState([]);

        function openDeleteModal(){
        setDeleteModal(!deleteModal)
        }
        function openEditModal(){
        setEditModal(!editModal)
        }

        function openAddModal(){
        setAddModal(!addModal)
        }



    const getProducts =  async()=>{
        let  token = window.localStorage.getItem("token");

        let response =  await fetch(constants.API_URL+"/v1/products",{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization":token
            }
        })

            response = await response.json();
            console.log(response);

            if(response?.data.products){
                setData(response?.data.products)
            }
    }

    const createProducts = async(id,name,narxi,yuklama,razmeri,kafolat,sigim,sale_price,aksiya,desc) =>{
        let token  =  window.localStorage.getItem("token");

        let response =  await fetch(constants.API_URL + "/v1/products",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                // photos,
                // category_id:id,
                product_name:name,
                product_price: narxi,
                product_weight: yuklama,
                product_size: razmeri,
                product_guaranty: kafolat,
                product_capasity: sigim,
                product_sale_price: sale_price,
                product_isNew: aksiya,
                product_description: desc,
                product_status:"active"
            })
        })


        response = await response.json(); 

        if(response?.ok === true){
            getProducts()
            openAddModal()
        }


    }





        useEffect(async () => {
            await getProducts()
            }, [])
        



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
                {/*
                <TrComponent /> */}

                {data.length > 0 && data.map((products,i)=>(

                <tr className="tr" key={products.id}>

                    <td>{products.product_name}</td>
                    <td>{products.category_id}</td>
                    <td>{products.product_price} so'm </td>
                    <td>{products.product_weight} kg</td>
                    <td>{products.product_size}x{products.product_size}x{products.product_size}</td>
                    <td className="td-right">
                        <div className="toggle">

                            <input name="mahsulot_nomi" name="toggle" type="checkbox" id={products.id} />
                            <label className="toggle-label" for={products.id}>Toggle</label>

                        </div>
                    </td>
                    <td className="td">
                        <button className="edit-btn" key={i} onClick={()=> openEditModal()} >
                            <img src={Edit} alt="" />
                        </button>
                        <button key={i} className="delete-btn"  onClick={()=> openDeleteModal()}  >
                            <img src={Delete} alt="" /></button>

                    </td>
                </tr>


                ))}

            </tbody>
        </table>

    </div>

    <button className="adds-buttons"  onClick={()=> openAddModal() }   >

        Qo'shish

    </button>

    <Modal show={deleteModal} w={400} mh={120} >
        <div className="delete-box">
            <h2 className="delete-title">Haqiqatdan ham o'chirmoqchimisiz ?
            </h2>
            <div className="delete-footer">
                <button className="delete-no" onClick={()=>openDeleteModal()}>
                    Yo'q
                </button>
                <button type="submit" className="delete-yes"   >
                    Ha
                </button>
            </div>
        </div>
    </Modal>

    <Modal show={editModal} w={580} mh={380}>
        <div className="modal-blok">
            {/* salom */}
            {/* <div className="modal-closes"> */}
                <button className="close-btn" onClick={()=>setEditModal()}>
                    <img src={Close} className="close-icon" alt="" />
                </button>
                {/* </div> */}
            <h2 className="modal-title">Mahsulotlarni tahrirlash</h2>
            <form className="modal-form" method="POST" encType="multipart/form-data">

                <ul className="modal-list">

                    <li className="modal-item modal-items">

                        <p>
                            Mahsulot nomlari
                        </p>
                        <Input name="mahsulot_nomi" type="text" placeholder="Masalan: Kevin" />

                        <p>
                            Toifalar
                        </p>
                        <Input name="toifalar_nomi" type="text" placeholder="Masalan: Model C" />


                        <p>
                            Narxi
                        </p>
                        <Input name="mahsulot_price" type="text" placeholder="Masalan: 20 000" />




                    </li>
                    <li className="modal-item modal-items">
                        <p>
                            Yuklama
                        </p>
                        <Input name="mahsulot_size" type="text" placeholder="Masalan: 200 kg" />
                        <p>
                            Razmeri
                        </p>
                        <Input name="mahsulot_razmeri" type="text" placeholder="masalan: 200 x 140 x 40" />

                        <div className="modal-footer modal-footers">
                            <p className="modal-subtext">Status</p>
                            <div className="toggle">

                                <input name="toggle" type="checkbox" id="active" />
                                <label className="toggle-label" for="active">Toggle</label>

                            </div>
                        </div>
                        <button className="add-button">Qo'shish</button>




                    </li>


                </ul>

            </form>
        </div>
    </Modal>

    <Modal  show={addModal} w={300}>

        <div className="mahsulot-box">
            <div className="mahsulot-close">
                <button className="mahsulot-close-btn" onClick={()=>setAddModal()}>

                    <img src={Close} className="close-icon" alt="" />
                </button>
            </div>
            <h2 className="mahsulot-title">
            Qo'shish
            </h2>
            <div className="modal-blok">
                <form    className="modal-form" method="POST"  encType="multipart/form-data">

                    <ul className="modal-list">
                        <li className="modal-item modal-img">
                            {/* <img src={Image} alt="" /> */}

{/* 
                            <input  name="photos" accept=".jpg,.png, .jpeg, .svg, .webp" className="multiple-input" multiple
                                type="file" /> */}
                        </li>
                        <li className="modal-item modal-items">
                            <p>
                                Toifalar
                            </p>
                            {/* <Input
                            

                            error={toifaError ? "true" : ""}
								type="text"
								placeholder="toifa"
	
								name="id" onChange={id}
								required
								list="data"
                                onChange={(event) =>{
                                    if(
                                        !toifalar.find(
                                            (e) => e == event.target.value
                                        )
                                    ){
                                        setToifaError(true)
                                    }
                                        else{
                                            setToifaError(false)
                                        }
                                    
                                }}
							/> */}
	                {/* <datalist id="data">
                        {toifalar.length &&  toifalar.map((item,key) =>{
                            return (

                                <option key={key} value={item}>{item}</option>
                                
                            )
                        })}

						</datalist> */}
                        <p>
                                Tovar nomi
                            </p>
                            <Input name="name" value={info.name} onChange={setdata} type="text" placeholder="Lux soft memory"  />

                            <p>
                                Narxi
                            </p>
                            <Input name="narxi" value={info.narxi} onChange={setdata} type="text" placeholder="Masalan: 20 000"  />


                            <p>
                                Yuklama
                            </p>
                            <Input   name="yuklama" value={info.yuklama} onChange={setdata} type="text" placeholder="Masalan: 200 kg" />

                        </li>
                        <li className="modal-item modal-items">

                            <p>
                                Razmeri
                            </p>
                            <Input  name="razmeri" value={info.razmeri} onChange={setdata} type="text" placeholder="masalan: 200 x 140 x 40" />

                            <p>
                                Kafolat
                            </p>
                            <Input  name="kafolat" value={info.kafolat} onChange={setdata} type="text" placeholder="Masalan:  1 yil" />


                            <p>
                                Sig'im
                            </p>
                            <Input name="sigim" value={info.sigim} onChange={setdata} type="text" placeholder="Masalan: 2" />
                            <p>
                                Aksiya narxi
                            </p><Input  name="sale_price" value={info.sale_price} onChange={setdata} type="text" placeholder="Masalan: 1 200 000 so'm" />

                        </li>
                        <li className="modal-item">
                            <p>Ma'lumot</p>

                            <textarea  name="desc" value={info.desc} onChange={setdata}  placeholder="Info..." required>

                            </textarea>
                            <div className="modal-footer">
	
                                <p className="modal-subtext">New</p>
                                <div className="toggle">

                                    <input name="aksiya" value={info.aksiya} onChange={setdata} type="checkbox" id="new" />
                                    <label className="toggle-label" for="new">Toggle</label>

                                </div>
                            </div>
                            <div className="modal-footer modal-footers">
                                <p className="modal-subtext">Active</p>
                                <div className="toggle">

                                    <input  name="status" value={info.status} onChange={setdata} type="checkbox" id="active" />
                                    <label className="toggle-label" for="active">Toggle</label>

                                </div>
                            </div>
                            <button  className="add-button"onClick={(e) =>{
                                            e.preventDefault()
                                            createProducts(info.name,
                                                info.narxi,
                                                info.yuklama,
                                                info.razmeri,
                                                info.kafolat, 
                                                info.sigim,
                                                info.sale_price,
                                                info.desc,
                                                info.isNew,
                                                info.status)
                                        
                                        }} >Qo'shish</button>
                        </li>

                    </ul>

                </form>
            </div>
        </div>

    </Modal>

</section>

)
}


export default MahsulotlarTable;