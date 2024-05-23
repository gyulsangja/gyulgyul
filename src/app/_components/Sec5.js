import React from 'react'
import pageStyle from '../../app/page.module.css'
import Image from 'next/image'
import img1 from '../../../public/images/img1.jpg'
import img2 from '../../../public/images/img2.png'
import img3 from '../../../public/images/sec1.jpg'

const Sec5 = () => {
  return (
    <section className={`${pageStyle.sec} ${pageStyle.sec5} mt50`} id='sec5'>
        <div className='inner'>
            <h2>portfolio</h2>
        
        <ul>
            <li>
                <Image src={img2} alt='gyulstock'/>
                <div className={pageStyle.content}>
                    <h4>주식현황 사이트</h4>
                    <p className={pageStyle.center}>1인/기여도 100%</p>
                    <p className={pageStyle.txt}>반응형 주식현황 사이트입니다. 공공데이터포털을 통해 주식현황을 제공하고 있습니다. 커뮤니티 공간도 있습니다. node.js을 활용한 데이터 처리에 중점을 뒀습니다.</p>
                    <p><b>Frontend</b> : React</p>
                    <p><b>Backend</b> : node.js, Docker, Naver Platform Server </p>
                    <p><b>Database</b> : MYSQL, Object Storage(S3)</p>
                    <p><b>dependencies</b> : Redux, Swiper.js, Recharts.js </p>
                    <div className={pageStyle.btn}>
                        <a href='http://118.67.135.87:3000' target='_blank'>바로가기</a>
                        <a href='http://github.com/gyulsangja/gyulstock' target='_blank'>GitHub</a>
                    </div>
                </div>
            </li>
            <li>
                <Image src={img3} alt='gyulstock'/>
                <div className={pageStyle.content}>
                    <h4>주식현황 사이트</h4>
                    <p className={pageStyle.center}>1인/기여도 100%</p>
                    <p className={pageStyle.txt}>반응형 주식현황 사이트입니다. 공공데이터포털을 통해 주식시세를 제공하고 있습니다. 커뮤니티 공간도 있습니다.</p>
                    <p><b>Frontend</b> : Vue</p>
                    <p><b>Backend</b> : node.js, Docker, Naver Platform Server </p>
                    <p><b>Database</b> : MYSQL, Object Storage(S3)</p>
                    <p><b>dependencies</b> : Redux, Swiper.js, Recharts.js </p>
                    <div className={pageStyle.btn}>
                        <a href='http://118.67.135.87:3000' target='_blank'>바로가기</a>
                        <a href='http://github.com/gyulsangja/gyulstock' target='_blank'>GitHub</a>
                    </div>
                </div>
            </li>
            <li>
                <Image src={img1} alt='gyulgyul'/>
                <div className={pageStyle.content}>
                    <h4>자기소개 사이트</h4>
                    <p className={pageStyle.center}>1인/기여도 100%</p>
                    <p className={pageStyle.txt}>반응형 자기소개 사이트입니다. 모션그래픽에 중점을 뒀습니다.</p>
                    <p><b>Frontend</b> : next.js</p>
                    <p><b>Backend</b> : next.js, Docker, Naver Platform Server </p>
                    <p><b>dependencies</b> : framer-motion</p>
                    <div className={pageStyle.btn}>
                        <a href='http://118.67.135.87:4000' target='_blank'>바로가기</a>
                        <a href='http://github.com/gyulsangja/gyulgyul' target='_blank'>GitHub</a>
                    </div>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default Sec5
