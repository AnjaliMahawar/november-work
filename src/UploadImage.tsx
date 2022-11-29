// import React, { useState } from 'react'

// function uploadImage() {
//     const[file,setFile]=useState<any>('')
//    const uploadImageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//     const data=e.target.files
// }
    
//   return (
//     <div>
//             <div className="App">
//             <h2>Add Image:</h2>
//             <input type="file" name='file' onChange={uploadImageChange} />
         
  
//         </div>
//     </div>
//   )
// }

// export default uploadImage
import React, { useState } from 'react'

function UploadImage() {
  const[file,setFile]=useState<any>('')
   const uploadImageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     const data:any=e.target.files
     console.log("data",data)
     const filesArray = URL.createObjectURL(data);
     console.log("final",filesArray)
 }
  return (
    <div>
        <div>
            <div className="App">
             <h2>Add Image:</h2>
              <input type="file" name='file' onChange={uploadImageChange} />
         </div>
     </div>
    </div>
  )
}

export default UploadImage