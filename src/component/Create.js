import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const history=useNavigate()
const header={'Acess-Control-Allow-Origin':'*'};
const handleSubmit=(e)=>{
    console.log('data sent')
    e.preventDefault();
    axios.post('https://63341a4390a73d0fede6bb57.mockapi.io/crudYoutube',{name:name,email:email,header}).then(()=>{

        history('/read');
    })
    
}

    return (
    <>
    <div className='d-flex justify-content-between mt-2'>
    <h2>Create 
    </h2>
    <Link to='/read'>
      <button className='btn btn-primary'>Show data</button></Link>
    </div>
        <form className='mt-4'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name </label>
    <input type="name" onChange={(e)=>setName(e.target.value)} className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
</>
    )
}

export default Create;