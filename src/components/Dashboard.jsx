import React,{useEffect,useState} from 'react'
import Topbar from './Topbar'
import axios from 'axios';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';


function Dashboard() {

let navigate = useNavigate()

  let[Blogs,setBlogs]=useState([])

  const getBlogs = async()=>{
  
    try {

      let res = await axios.get(API_URL)
      console.log(res.data);
      if(res.status===200){
         toast.success('Blogs fetched successfull')
        setBlogs(res.data)
      }

    } catch (error) {
      
    }

  }
  const handelDelet= async(id)=>{

    try {

      let res =await axios.delete(`${API_URL}/${id}`)
      if(res.status===200){
        getBlogs()
      }
      
    } catch (error) {
      
    }

  }

useEffect(()=>{

  getBlogs()

},[])
  return<div className='container-fulid'>
  <Topbar></Topbar>
  <h1>Dashboard</h1>

  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        Blogs.map((e,i)=>{

          return<tr key={i}>
               <td>{i+1}</td>
               <td>{e.tittle}</td>
               <td>
                <img src={e.image} alt={e.tittle} style={{width:"100px"}}/>
               </td>
               <td>
                <div style={{width:"300px",overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>
                {e.description} 
                </div>
               </td>
               <td>{e.status?"Active":"InActive"}</td>
               <td>
                <Button variant='info' onClick={()=>navigate(`/edit/${e.id}`)}>Edit</Button>
             &nbsp;
                <Button variant='danger' onClick={()=>handelDelet(e.id)}>Delete</Button>
               </td>
             

          </tr>

        })
      }
      </tbody>
    </Table>




</div>

}



export default Dashboard
