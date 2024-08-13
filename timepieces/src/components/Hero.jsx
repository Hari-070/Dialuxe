import React from 'react'
import video from '../assets/watch vid1.webm'
import './product.css'

const Hero = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:'center'}} className='hero_vid'>
        {/* <div>

        </div> */}
      <video width="100%"  muted autoPlay loop style={{borderBottomLeftRadius:"80px",borderBottomRightRadius:"80px"}}>
            <source src={video} type='video/mp4'/>
            video not available
      </video>
      <div className='gradient'></div>
    </div>
  )
}

export default Hero
