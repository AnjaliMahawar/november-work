import React from 'react'
import { EmailShareButton,FacebookShareButton,WhatsappShareButton,} from "react-share";
import{ EmailIcon, FacebookIcon, WhatsappIcon,}from "react-share";
  

function shareB() {
  return (
    <div>
        <div>
            <FacebookShareButton  url={'https://www.facebook.com/'}>
                <FacebookIcon size={32} round={true}></FacebookIcon>
            </FacebookShareButton>
          
        </div>
    </div>
  )
}

export default shareB