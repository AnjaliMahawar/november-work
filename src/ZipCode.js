import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import './App.css';

function ZipCode() {
    const [zip,setZip]=useState('')
    const [allData,setAllData]=useState([])

    const getCity=()=>{
        console.log("zip",zip)
        const getCityByZip=async()=>{
            const res=await fetch(`https://api.postalpincode.in/pincode/${zip}`)
            const data =await res.json();
            console.log(data)
            const dataFinal=data[0].PostOffice
            setAllData(dataFinal)
           
        }
        getCityByZip()
    }
  return (
    <div>

           <input type="text"  name="name" value={zip} onChange={(e)=>{setZip(e.target.value)}} placeholder="enter pin code"className='inputForm'  /> 
         
        
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>District</th>
          <th>Division</th>
          <th>Block</th>
        </tr>
      </thead>
      <tbody>
      {
           allData.map((cv,indx) => (
            <tr key={indx}>
            <td>{cv.Name}</td>
            <td>{cv.District}</td>
            <td>{cv.Division}</td>
            <td>{cv.Block}</td>
            </tr>
            
        ))}    
        
      </tbody>
    </Table>    
            <button onClick={getCity}>get city</button>

    </div>
  )
}

export default ZipCode



