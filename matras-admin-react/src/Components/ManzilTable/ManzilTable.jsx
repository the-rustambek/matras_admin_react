import { useEffect } from 'react';
import Edit from '../../Assets/Images/edit.png';
import Close from '../../Assets/Images/Close.png';
import './ManzilTable.css';
import { useState } from 'react';

import Delete from '../../Assets/Images/delete.png';
import Map from '../../Assets/Images/Map.png';

import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import constants from '../../configs/constants';

const ManzilTable = () => {
    // console.log(items,"aloooo")
    // const onChange = (e) =>{
    //     console.log(e.target.files);
    //     }

    const [id, setId] = useState('');

    const [info, setInfo] = useState({
        // photos: [],
        name: '',
        location: '',
        description: '',
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

    const [data, setData] = useState([]);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);

    function openDeleteModal() {
        setDeleteModal(!deleteModal);
    }
    function openEditModal() {
        setEditModal(!editModal);
    }

    function openAddModal() {
        setAddModal(!addModal);
    }



    


const getLocations = async() => {
    let token = window.localStorage.getItem("token")

    let response = await fetch(constants.API_URL+"/v1/locations",{
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    "Authorization": token
    }
    })
    response = await response.json();
    console.log(response);
    if(response?.data.locations){
    setData(response?.data.locations)
}
}


const createLocation = async(name,location,description) => {
    let token = window.localStorage.getItem("token")
    // const formData = new FormData();
    // formData.append('photos', selectedFile);
    console.log(name)
    let response = await fetch(constants.API_URL+"/v1/locations",{
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Authorization": token
    },
    body: JSON.stringify({
        // photos,
        location_name: name,
        location_link:location,
        location_description:description,
        location_status: "active"
})


})




response = await response.json(); 

if(response?.ok === true){
     getLocations()
     openAddModal()
}



}

// const onSelectFile = async(photos) => createLocation(photos.files[0]);


useEffect(async () => {
    await getLocations()
    }, [])

    return (
        <div className='toifalar-table'>
            <section className='tables'>
                <div className='tbl-header'>
                    <table>
                        <thead>
                            <tr>
                                <span className='tr-span'>
                                    <th className='td-lefts'>Manzil</th>
                                    <th className='td-lefts'>Matn</th>
                                    <th className='td-lefts'>Location</th>
                                </span>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className='tbl-content'>
                    <table>
                        <tbody>
                            {data.map((locations, i) => (
                                <tr className='tr' key={i}>
                                    <span className='tr-span'>
                                        <td className='td-lefts'>
                                            {locations.location_name}
                                        </td>
                                        <td className='td-lefts'>{locations.location_description}</td>
                                        <td className='td-lefts'>
                                            <a href={locations. location_link}>
                                                <img
                                                    src={Map}
                                                    alt=''
                                                    className='map'
                                                />
                                            </a>
                                        </td>
                                    </span>
                                    <td className='td-right'>
                                        <button
                                            className='edit-btn'
                                            key={id}
                                            onClick={() => openEditModal()}>
                                            <img src={Edit} alt='' />
                                        </button>
                                        <button
                                            className='delete-btn'
                                            key={id}
                                            onClick={() => openDeleteModal()}>
                                            <img src={Delete} alt='' />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className='adds-btns' onClick={() => openAddModal()}>
                    Qo'shish
                </button>

                <Modal show={deleteModal} w={400} mh={120}>
                    <div className='delete-box'>
                        <h2 className='delete-title'>
                            Haqiqatdan ham o'chirmoqchimisiz ?
                        </h2>
                        <div className='delete-footer'>
                            <button
                                className='delete-no'
                                onClick={() => openDeleteModal()}>
                                Yo'q
                            </button>
                            <button className='delete-yes' type='submit'>
                                Ha
                            </button>
                        </div>
                    </div>
                </Modal>
                <Modal show={editModal} w={800} mh={380}>
                    <div className=' mahsulot-boxes'>
                        <div className='mahsulot-closes'>
                            <button
                                className='mahsulot-close-btn'
                                onClick={() => setEditModal()}>
                                <img
                                    src={Close}
                                    className='close-icon'
                                    alt=''
                                />
                            </button>
                        </div>
                        <h2 className='mahsulot-title'>Tahrirlash</h2>
                        <div className='modal-blok'>
                            <form
                                className='modal-form'
                                method='POST'
                                encType='multipart/form-data'>
                                <ul className='modal-list'>
                                    <li className='modal-item modal-img'>
                                        {/* <img src={Image} alt="" /> */}

                                        <input
                                            accept='.jpg,.png, .jpeg, .svg, .webp77  7'
                                            className='multiple-input'
                                            multiple
                                            type='file'
                                        />
                                    </li>

                                    <li className='modal-item modal-items'>
                                        <p>Manzil</p>
                                        <Input
                                            type='text'
                                            placeholder='masalan: Toshkent'
                                        />

                                        <p>location</p>
                                        <Input
                                            type='text'
                                            placeholder="Mo'ljal:  Sergeli-9"
                                        />

                                        <div className='modal-toggles'>
                                            <div className='modal-subtext'>
                                                Holat
                                            </div>
                                            <div className='toggle'>
                                                <input
                                                    type='checkbox'
                                                    id='holat'
                                                />
                                                <label
                                                    className='toggle-label'
                                                    for='holat'>
                                                    Toggle
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='modal-item'>
                                        <p>Matn</p>

                                        <textarea
                                            placeholder='Info...'
                                            required></textarea>

                                        <button className='add-button adds-btn'>
                                            Qo'shish
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </Modal>

                <Modal show={addModal} w={800} mh={380}>
                    <div className=' mahsulot-boxes'>
                        <div className='mahsulot-closes'>
                            <button
                                className='mahsulot-close-btn'
                                onClick={() => setAddModal()}>
                                <img
                                    src={Close}
                                    className='close-icon'
                                    alt=''
                                />
                            </button>
                        </div>
                        <h2 className='mahsulot-title'>Qo'shish</h2>
                        <div className='modal-blok'>
                            <form
                                className='modal-form'
                                method='POST'
                                encType='multipart/form-data'>
                                <ul className='modal-list'>
                                    <li className='modal-item modal-img'>
                                        {/* <img src={Image} alt="" /> */}
 
                                        {/* <input  name='photos' onChange={() =>{onSelectFile()}}
                                            accept='.jpg,.png, .jpeg, .svg, .webp77  7'
                                            className='multiple-input'
                                            multiple
                                            type='file'
                                        /> */}
                                    </li>

                                    <li className='modal-item modal-items'>
                                        <p>Manzil</p> 
                                        <Input name="name" value={info.name}
                                        onChange={setdata}    type='text'
                                            placeholder='masalan: Toshkent'
                                        />

                                        <p>location</p>
                                        <Input name="location" value={info.location} onChange={setdata}
                                            type='text'
                                            placeholder="Mo'ljal:  Sergeli-9"
                                        />

                                        <div className='modal-toggles'>
                                            <div className='modal-subtext'>
                                                Holat
                                            </div>
                                            <div className='toggle'>
                                                <input name="status" value={info.status} onChange={setdata}
                                                    type='checkbox'
                                                    id='holat'
                                                />
                                                <label
                                                    className='toggle-label'
                                                    for='holat'>
                                                    Toggle
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='modal-item'>
                                        <p>Matn</p>

                                        <textarea name='description' value={info.description} onChange={setdata}
                                            placeholder='Info...'
                                            required></textarea>

                                        <button onClick={(e) =>{
                                            e.preventDefault()
                                            createLocation(info.name,info.location,info.description,info.status)
                                        
                                        }} className='add-button adds-btn'>
                                            Qo'shish
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </Modal>
            </section>
        </div>
    );
};

export default ManzilTable;
