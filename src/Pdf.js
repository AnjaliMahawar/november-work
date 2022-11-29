import React from 'react'
import './App.css';
import { jsPDF } from "jspdf";
function Pdf() {
    const genratePdf=()=>{
        const doc = new jsPDF('p','pt','a4');
      doc.html(document.querySelector('#content'),{
        callback:function(pdf){
          var pageCount=doc.internal.getNumberOfPages()
          pdf.deletePage(pageCount)
          pdf.save('mypdf.pdf')
        }
      })          
    }
  return (
    <div id='content' >
       <h1>PFD</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque commodi, odit voluptas porro rem doloremque amet numquam ipsa ea temporibus recusandae repellendus molestiae iusto dolorem voluptatibus quod nulla molestias.</p>
      <img src='https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg'></img>
      <button onClick={genratePdf}>genrate_PDF</button>   
    </div>

  )
}

export default Pdf