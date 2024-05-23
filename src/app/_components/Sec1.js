import React from 'react'
import pageStyle from '../../app/page.module.css'

const Sec1 = () => {
  return (
    <section className={`${pageStyle.sec} ${pageStyle.sec1}`} id='sec1'>
        <video muted playsInline preload={true.toString()} loop  autoPlay>
            <source src='/video.mp4' type="video/mp4"/>
        </video>
    </section>
  )
}

export default Sec1
