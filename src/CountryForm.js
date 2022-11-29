import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function CountryForm() {
  const [country, setCountry]= useState([]);
  const [countryid, setCountryid]= useState('');
  const [states, setSate]= useState([]);
  const [stateid, setStateid]= useState('');
    const [city, setCity]= useState([]);
const url='https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json'
  useEffect( ()=>{
    const getcountry= async()=>{
        const rescountry= await fetch(url);
        const rescon= await rescountry.json();
        setCountry(await rescon);
        console.log(rescon)
    }
    getcountry();
},[]);

useEffect( ()=>{
  const getstate= async()=>{
      const resstate= await fetch(url);
      const resst= await resstate.json();
         const stateById=resst[countryid]
        const getAllState=stateById.states
        setSate(await getAllState);
    
  }
 getstate();
  },[countryid]);

useEffect( ()=>{
  const getcity= async()=>{
      const resstate= await fetch(url);
      const resst= await resstate.json();
      const stateById=resst[countryid]
      const getAllState=stateById.states
      const getAllCities= getAllState[stateid]
   
        const final =getAllCities.cities
       setCity(final)
  }
 getcity();
  },[stateid]);


const handlecountry=(event)=>{
  const getcountryid= event.target.value;
  console.log("country id",getcountryid)
  setCountryid(getcountryid);
}   

const handlestate=(event)=>{
  const getstateid= event.target.value;
  console.log("handle state",getstateid)
  setStateid(getstateid);
}

  return (
    <React.Fragment>
    <Container className="content">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="mt-4 mb-4 fw-bold">
            Select Country, State and City{" "}
          </h2>

          <form className="row g-3">

             <div className="col-md-3">
              <label  className="form-label">Country </label>
              <select name="country" className="form-control p-2" onChange={(e)=>handlecountry(e)}  >
            
                <option  value="">--Select Country--</option>
                {
                 country.map( (getcon, index)=>(
                  <option key={index} value={index}>{getcon.name } </option>
                 ))
                  }
              </select>
            </div>

            <div className="col-md-3">
              <label  className="form-label">State</label>
              <select className="form-select" name="state"  onChange={(e)=>handlestate(e)}>
                <option value="">--Select State--</option>
                {
                states.map( (getstate, index)=>(
                  <option key={index} value={index}>{getstate.name } </option>
                 ))
                  }
              </select>
            </div>

            <div className="col-md-3">
              <label  className="form-label">City</label>
              <select className="form-select" name="city">
                <option value="">--Select City--</option>
                {
                city.map( (getstate, index)=>(
                  <option key={index} value={index}>{getstate.name } </option>
                 ))
                  }
                             
              </select>
            </div>
            
            <div className="col-md-3">                
              <button type="button" className="btn btn-primary mt-4">Submit</button>
            </div>
          
          </form>
        </div>
      </div>
    </Container>
  </React.Fragment>
  );
}

export default CountryForm