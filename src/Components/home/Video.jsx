import React from 'react'

const Video = () => {
       return (
              <div className='h-full w-full '>
                     <video className='h-full w-full object-cover' autoPlay muted loop src="./Video.mp4"></video>
              </div>
       )
}

export default Video
