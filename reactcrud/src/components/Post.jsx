import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
const Post = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const persons=location.state || {}


  const [names,setName] =useState(persons.names||"")
  const [address,setAddress] =useState(persons.address||"")
  const [email,setEmail] = useState(persons.email||"")
  const [phone,setPhone] = useState(persons.phone||0)
  const[personId] = useState(persons.id||null)

  const handleData = async(e) => {
    e.preventDefault()
    
    try{
      if(personId){
        const response = await axios.put(`http://127.0.0.1:8000/crudapp/addpersons/${personId}/`,{
          names,
          address,
          email,
          phone
        })
        console.log(response.data)
      }
      else{
        const response = await axios.post(`http://127.0.0.1:8000/crudapp/addpersons/`,{
          names,
          address,
          email,
          phone
        })
        console.log(response.data)
      }
      navigate("/get")
    }
    catch(error){
      console.log(error)
    }
  }


  return (  
    <div className='w-cover vh-100 p-3 my-custom-color'>
    <form className='row gy-2 gx-3 align-items-center justify-content-center'>
    <h1 className='text-center'>{personId ? "Update Details" : "Add Details"}</h1>
    <div className="col-12">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder='Enter the name' value={names} onChange={(e)=>setName(e.target.value)} required/>
    </div>
    <div className="col-12">
        <label htmlFor="address" className="form-label">Address</label>
        <input type='text' className="form-control" id="address" placeholder="Enter the address" value={address} onChange={(e)=>setAddress(e.target.value)} required/>
    </div>
    <div className="col-12">
        <label htmlFor="email" className="form-label">Email</label>
        <input type='text' className="form-control" id="email" placeholder='Enter the E.Mail' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    </div>
    <div className="col-12">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input type="number" className="form-control" id="phone" placeholder='Enter the Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
    </div>
    <div className="col-12">
        <button className='btn btn-primary btn-center' onClick={handleData}>{personId ? "Update" : "Add"}</button>
    </div>
   </form>
   </div>
  )
}

export default Post