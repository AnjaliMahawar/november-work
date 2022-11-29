import React from 'react'

import ReactPlayer from 'react-player'

function VideoPlay() {
  return (
    <div>
        <h1>Video player</h1>
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=sbtuL_BSZHg' playing={false} valume={1} controls={true}/>
        </div>
    </div>
  )
}

export default VideoPlay