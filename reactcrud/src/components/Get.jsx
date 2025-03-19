import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../index.css'


const Get = () => {

    const [data,setData] = useState([])
    const navigate=useNavigate()    

    const fetchdata = async() => {
        try{
            const response = await axios.get("http://127.0.0.1:8000/crudapp/addpersons/")
            setData(response.data)
        }catch(error){
            console.log(error)
        }
    }

    const deleteData = async (id) => {
        try{
            const response = await axios.delete(`http://127.0.0.1:8000/crudapp/addpersons/${id}/`)
            console.log(response.data)
            setData((prevailData)=>prevailData.filter((md)=>md.id!==id))
        }catch(error){
            console.log(error)
        }
    }
    const update=(persons)=>{
        navigate('/',{state:persons})
    }
    useEffect(()=>{
        fetchdata()
    },[])

    const showdetails = data.map((md)=>{
        return(
                <tr key={md.id} className='text-center'>
                    <td>{md.names}</td>
                    <td>{md.address}</td>
                    <td>{md.email}</td>
                    <td>{md.phone}</td>
                    <td><button className='btn btn-primary btn-sm' onClick={()=>update(md)}>update</button></td>
                    <td><button className="btn btn-danger btn-sm"onClick={()=>deleteData(md.id)}>Delete</button></td>
                </tr>
        )
    })

    return (
    <>
        <div className='w-cover vh-100 p-3 my-custom-color'>
        <div className='container mt-4'>
            <h1 className="text-center mb-4 text-light">Person Details</h1>
            <div className="table-responsive">
            <table  className="table table-hover table-primary table-bordered">
                <thead className="table-dark text-center">
                    <tr>
                        <td>Names</td>
                        <td>Address</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {showdetails}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </>
  )
}

export default Get