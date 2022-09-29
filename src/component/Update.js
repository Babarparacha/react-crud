import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setid] = useState(0)
    const history=useNavigate()
const header={'Acess-Control-Allow-Origin':'*'};
// const handleSubmit=(e)=>{
//     console.log('data sent')
//     e.preventDefault();
//     axios.post('https://63341a4390a73d0fede6bb57.mockapi.io/crudYoutube',{name:name,email:email,header}).then(()=>{

//         history('/read');
//     })
// }

const handleupdate=(e)=>{
    console.log('data update')
    e.preventDefault();
    axios.put(`https://63341a4390a73d0fede6bb57.mockapi.io/crudYoutube/${id}`,{name:name,email:email,header}).then(()=>{

        history('/read');
    })
    
}
useEffect(() => {
    setid(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setEmail(localStorage.getItem('email'))
}, [])

    return (
    <>
    <h2>Update</h2>
        <form className='mt-4'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name </label>
    <input type="name" value={name}  onChange={(e)=>setName(e.target.value)} className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleupdate}>Update</button>
  <Link to='/read'>
  <button type="submit" className="btn btn-secondary mx-2">back</button>
  </Link>
</form>
</>
    )
}

export default Update;