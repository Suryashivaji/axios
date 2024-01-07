import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Topbar from './Topbar';
import BlogCard from './common/BlogCard'
import axios from 'axios';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

  let {id}= useParams()

  let navigate =useNavigate()


let[tittle,setTittle]=useState("")
let[image,setImage]=useState("")
let[description,setDesc]=useState("")


const handleEdit= async()=>{
  try {
    let data ={tittle,image,description,status:false}
    let res = await axios.put(`${API_URL}/${id}`,data)
    if(res.status===200){
      toast.success("Blogs Created successfully")
      navigate('/dashboard')
    }
    
  } catch (error) {
    
  }

}
const getBolgById = async()=>{
  try {
    let res =await axios.get(`${API_URL}/${id}`)
    if(res.status===200){
      setTittle(res.data.tittle)
      setImage(res.data.image)
      setDesc(res.data.description)
    }
  } catch (error) {
    
  }
}
useEffect(()=>{

getBolgById()

},[])


  return <>
  
  <div className='container-fulid'>
<Topbar/>
   <div className='homeWrapper'>
   <div className='formWrapper'>
  <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Tittle</Form.Label>
        <Form.Control type="text" placeholder="tittle" value={tittle} onChange={(e)=>{setTittle(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="image url" value={image}  onChange={(e)=>{setImage(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="descrpition"value={description} onChange={(e)=>{setDesc(e.target.value)}} />
      </Form.Group>


      <Button variant="primary" onClick={()=>handleEdit()}>
        Submit
      </Button>

    </Form>
    </div>
   </div>

   <div className='previewWrapper'>
    <h2 style={{textAlign:"center"}}>
      Preview
    </h2>
    <BlogCard 
    
    tittle={tittle}
    image={image}
    description={description}
    
    />
   </div>

  </div>
  
  </>
}

export default Edit
