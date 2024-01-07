import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Topbar from './Topbar';
import BlogCard from './common/BlogCard'
import axios from 'axios';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Creat() {

  let navigate =useNavigate()

let[tittle,setTittle]=useState("")
let[image,setImage]=useState("")
let[description,setDesc]=useState("")


const handelCreate= async()=>{
  try {
    let data ={tittle,image,description,status:false}
    let res = await axios.post(API_URL,data)
    if(res.status===201){
      toast.success("Blogs Created successfully")
      navigate('/dashboard')
    }
    
  } catch (error) {
    
  }

}
  return <>
  
  <div className='container-fulid'>
<Topbar/>
   <div className='homeWrapper'>
   <div className='formWrapper'>
  <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Tittle</Form.Label>
        <Form.Control type="text" placeholder="tittle" onChange={(e)=>{setTittle(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="image url"  onChange={(e)=>{setImage(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" placeholder="descrpition" onChange={(e)=>{setDesc(e.target.value)}} />
      </Form.Group>


      <Button variant="primary" onClick={()=>handelCreate()}>
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

export default Creat
