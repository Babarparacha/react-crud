import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setdata] = useState([])
    const [tabledark, settabledark] = useState('')
    const [inputText, setinputText] = useState('')
function getData(){
    axios.get('https://63341a4390a73d0fede6bb57.mockapi.io/crudYoutube').then((res)=>{
        console.log(res.data)
        setdata(res.data)
    });
}
useEffect(() => {
    getData()
    
}, [])

const handleDelete=(id)=>{
    axios.delete(`https://63341a4390a73d0fede6bb57.mockapi.io/crudYoutube/${id }`).then(()=>{
        getData()
    })
}

//settng data into the local storage to get edit sucess
const setLOcatlStorage=(id,name,email)=>{

localStorage.setItem("id",id)
localStorage.setItem("name",name)
localStorage.setItem("email",email)
}

const inputHandler=(e)=>{
    setinputText(e.target.value.toLowerCase())
}

    return (
        <>
        <div className="form-check form-switch">
  <input className="form-check-input mt-2" type="checkbox" onClick={()=>{
    if(tabledark==='table-dark') settabledark(''); else settabledark('table-dark');
  }}/>
</div>
        <div className='d-flex justify-content-between mt-2'>
        <h2>Read operation</h2>
        <div className="mb-3">
    <input type="search" class="form-control" placeholder='serach data' onChange={inputHandler}/>
  </div>


        <Link to='/'>
<button className='btn btn-dark'>Create</button></Link>
        </div>
        <table class={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {data
  .filter((el)=>{
     if(el===''){ 
        return el;
     }
     else{
        return el.name.toLowerCase().includes(inputText) || el.email.toLowerCase().includes(inputText)
     }
  }).map((eachdata)=>{
        return(
            <>
            <tbody >
    <tr>
      <th scope="row" >{eachdata.id}</th>
      <td>{eachdata.name}</td>
      <td>{eachdata.email}</td>
      <Link to='/update'>
      <td><button className='btn-primary' onClick={()=>{setLOcatlStorage(eachdata.id,eachdata.name,eachdata.email)}}>Edit</button></td>
      </Link>
      <td><button className='btn-danger'onClick={()=>handleDelete(eachdata.id)}>Delete</button></td>
    </tr>
    
  </tbody>
            </>
        )
    })
  
}
</table>
        </>
    )
}



export default Read;