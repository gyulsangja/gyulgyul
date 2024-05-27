import React from 'react'
import pageStyle from '../../app/page.module.css'
import Image from 'next/image'
import img1 from '../../../public/images/img1.jpg'
import img2 from '../../../public/images/img2.png'
import img3 from '../../../public/images/img3.jpg'

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
                    <p className={pageStyle.txt}>반응형 주식현황 사이트입니다. 공공데이터포털을 통해 제공받은 주식데이터를 기반하여 주식현황을 제공하되 rechart를 활용하여 시각화하였습니다.<br/><br/>회원가입 기능과 게시판 기능을 구현하며 REDUX를 이용한 상태관리와 이미지 업로드 삭제 처리를 구현하였습니다. 데이터는 cloud 서버와 mysql과 aws S3이용하였습니다.
                    </p>
                    <p><b>Frontend</b> : React</p>
                    <p><b>Backend</b> : node.js, Docker, Cloud Server </p>
                    <p><b>Database</b> : MYSQL, Object Storage(S3)</p>
                    <p><b>dependencies</b> : Redux, Swiper, Recharts </p>
                    <div className={pageStyle.btn}>
                        <a href='http://118.67.135.87:3000' target='_blank'>바로가기</a>
                        <a href='http://github.com/gyulsangja/gyulstock' target='_blank'>GitHub</a>
                    </div>
                </div>
            </li>
            <li>
                <Image src={img3} alt='gyulstock'/>
                <div className={pageStyle.content}>
                    <h4>개인블로그</h4>
                    <p className={pageStyle.center}>1인/기여도 100%</p>
                    <p className={pageStyle.txt}>반응형 개인블로그입니다. 주로 tiptap을 이용하여 게시판 기능을 만들었습니다. 이미지 업로드 관리가 가능합니다. jwt방식으로 로그인 방식 구현하였으며 VUEX을 이용하여 상태관리를 구현하였습니다.  데이터는 cloud 서버와 mysql과 aws S3이용하였습니다.</p>
                    <p><b>Frontend</b> : Vue</p>
                    <p><b>Backend</b> : node.js, Docker, Cloud Server </p>
                    <p><b>Database</b> : MYSQL, Object Storage(S3)</p>
                    <p><b>dependencies</b> : jsonwebtoken, VUEX, Swiper.js, aos </p>
                    <div className={pageStyle.btn}>
                        <a href='http://118.67.135.87:8000' target='_blank'>바로가기</a>
                        <a href='http://github.com/gyulsangja/gyultree' target='_blank'>GitHub</a>
                    </div>
                </div>
            </li>
            <li>
                <Image src={img1} alt='gyulgyul'/>
                <div className={pageStyle.content}>
                    <h4>자기소개 사이트</h4>
                    <p className={pageStyle.center}>1인/기여도 100%</p>
                    <p className={pageStyle.txt}>반응형 자기소개 사이트입니다. framer-motion을 이용하여 모션그래픽을 구현하는데 중점을 뒀습니다.</p>
                    <p><b>Frontend</b> : next.js</p>
                    <p><b>Backend</b> : next.js, Docker, Cloud Server </p>
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
