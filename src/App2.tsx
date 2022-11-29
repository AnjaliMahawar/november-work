import React from 'react'
import Products from './Products'
import './App.css';
import { EmailShareButton,FacebookShareButton ,FacebookShareCount,InstapaperShareButton,WhatsappShareButton,} from "react-share";
import{ EmailIcon,InstapaperIcon, FacebookIcon, WhatsappIcon,}from "react-share";
import { RWebShare } from 'react-web-share';
import { Button, Form } from 'react-bootstrap';
  

function App2() {
  const videoUrl='https://www.youtube.com/watch?v=2BnTYEafRQc'
  return (
    <div>
        {/* <h1 className='flip'>Flipkart</h1> */}
      {/* <Products/> */}
      <div className='shrbtn'>
        <h1>Share Buttons</h1>
            <FacebookShareButton  url={videoUrl}>
                <FacebookIcon size={32} round={true}></FacebookIcon>
            </FacebookShareButton>
            <WhatsappShareButton url={videoUrl} >
                <WhatsappIcon size={32} round={true}></WhatsappIcon>
            </WhatsappShareButton>
            <EmailShareButton  url={videoUrl}>
               <EmailIcon size={32} round={true}></EmailIcon>
            </EmailShareButton>
            <InstapaperShareButton url={videoUrl}>
              <InstapaperIcon size={32} round={true}></InstapaperIcon>
            </InstapaperShareButton>
           
         
      {/* <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "https://www.youtube.com/watch?v=YmHKXm5YEdc",
          title: "Flamingos",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        < className='btn'>Share</button>
      </RWebShare> */}
        </div>


      <div>
      <p onCopy={(e)=>{
        e.preventDefault()
      }}>Lorem, ipsum.</p>
      </div>
      <div>
           
      </div>
    </div>
  )
}

export default App2