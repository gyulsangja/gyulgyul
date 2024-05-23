import React from 'react'
import pageStyle from '../../app/page.module.css'

const Sec6 = () => {
  return (
    <section className={`${pageStyle.sec} ${pageStyle.sec6}`} id='sec6'>
        <div className='inner'>
            <div className={pageStyle.txt}>
                <h3>한상은</h3>
                <p><a href='tel: 010-8596-3475'>010-8596-3475</a></p>
                <p><a href='mailto: gojekal@naver.com'>gojekal@naver.com</a></p>

            </div>
            

        </div>
    </section>
  )
}

export default Sec6
