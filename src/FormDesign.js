import React from 'react'
import './App.css';
function FormDesign() {
  return (
    // <div className='bodyy'>
    //     <div className='regForm'>
    //         <h1>Registration form</h1>
    //     </div>
    //     <div className='mane'>
    //     <form>
    //        <div id='name'>
    //           <h2 className='name'>Name</h2>
    //           <input className='firstname' type='text' name='first_name'/><br></br>
    //           <label className='firstlabel'>first name</label><br></br>
    //           <input className='lastname' type='text' name='last_name'/>
    //           <label className='lastlabel'>last_name</label>

    //           <h2 className='name'>company</h2>
    //           <input className='company' type='text' name='company'/>

    //           <h2 className='name'>Email</h2>
    //           <input className='email' type='email' name='email'/>

    //           <h2 className='name'>Phone</h2>
    //           <input className='code' type='text' name='area_code'/>
    //           <label className='area_code'>Phone Number</label>
              
    //           <button type='submit'>Register</button>
    //        </div>
    //     </form>
    //     </div>
    // </div>

    <div className='container1'>
      <div  >
       <div >
         <div className="modal-container1">
         <h1 className="h1registration">Registration form</h1>
         <form >
           <div className="input-block1">
                    <label  className="input-label1">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                     className='inputForm'
                    />
              
                  </div>
                  <div className="input-block1">
                    <label  className="input-label1" >
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="enter your email"
                      className='inputForm'
                     />
                   
                  </div>
                   <div className="input-block1">
                    <label htmlFor="password"  className="input-label1">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="enter your password"
                      className='inputForm'
                     
                    />
                    
                  </div>
                  <div className="input-block1">
                    <label  className="input-label1">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="enter your password"
                      className='inputForm'
                    />
                 
                  </div>
                  <div className="input-block1" >
                    <button className="input-button1"   type="submit" >
                      Registration 
                    </button>
                  </div>
                  </form>
                 </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                </div>  
               </div>
               </div>
  )
}

export default FormDesign