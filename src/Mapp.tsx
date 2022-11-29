import React, { useState } from 'react'

function Mapp() {
   const[allData,setAllData]=useState([]) 
    const callApi=()=>{
        console.log("ok")
        const getData=async()=>{
         const response =await fetch('https://fakestoreapi.com/products')   
         const data= await response.json()
         console.log("data=====>",data)
         setAllData(data)

        }
        getData()
    }
    console.log("data out",allData)
  return (
    <div>
        {/* {
            allData.map((cv:any,indx:number)=>{
                <div>
                   <h1>{cv.img}</h1>
                </div>

            })
        }
        <button onClick={callApi}>click me</button> */}

    </div>
  )
}

export default Mapp