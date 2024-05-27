"use client";
import React, { useRef, useState, useEffect} from "react";
import { motion, useScroll, useTransform, useInView,useSpring} from "framer-motion";
import pageStyle from '../../app/page.module.css'

const Sec4 = ({ viewHeight }) => {
    const [bottomP] =useState({
      first: ['항', '상', ' ', '진', '심', '으', '로'],
      second: ['처', '음', '처', '럼'],
      third: ['배', '우', '는', ' ', '마', '음', '으', '로']
    })
    const [title] = useState(["PROFILE", "SKILL", "CAREER"]);
    const { scrollY } = useScroll();
    const liRefs = useRef([]);
  
    const addToRefs = (el) => {
      if (el && !liRefs.current.includes(el)) {
        liRefs.current.push(el);
      }
    };

    const { ref, inView } = useInView({ triggerOnce: true }); 

    const [scrollProgress, setScrollProgress] = useState(0);
  const bottomRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bottomHeight = bottomRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollAmount = Math.max(0, window.scrollY - bottomRef.current.offsetTop + windowHeight) / bottomHeight;
      setScrollProgress(scrollAmount);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };


    return (
      <section className={`${pageStyle.sec} ${pageStyle.sec4}`} id="sec4">
        <ul className={`inner`}>
        {title.map((title, index) => {
          const start = liRefs.current[index] ? liRefs.current[index].offsetTop - viewHeight : 0;
          const end = start + viewHeight * 2 / 3;

          const springRotateY = useSpring(useTransform(scrollY, [start, end], [50, 0]), { stiffness: 300, damping: 30 });
          const springTranslateYForContent = useSpring(useTransform(scrollY, [start, end], ["50px", "0px"]), { stiffness: 300, damping: 30 });

          
          return (
            <li key={index} ref={addToRefs}>
              <motion.h3
                ref={ref}
                style={{
                  transformStyle: "preserve-3d",
                  rotateY: springRotateY,
                  transition: "transform 0.3s ease-out"
                }}
              >
                {title}
              </motion.h3>
              {title === "PROFILE" && (
                <>
                  <motion.h4
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >한상은
                  </motion.h4>
                  <motion.p
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >
                    1986.5.18
                  </motion.p>
                </>
              )}
              {title === "SKILL" && (
                <>
                  <motion.h4
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >- Language</motion.h4>
                  <motion.p
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >JavaScript SQL HTML CSS</motion.p>
                  <motion.h4
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >
                    - Frontend</motion.h4>
                  <motion.p
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >React Next VUE JQUERY</motion.p>
                  <motion.h4
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >
                    - Backend</motion.h4>
                  <motion.p
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >Node.js Next docker</motion.p>
                  <motion.h4
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >
                    - Database</motion.h4>
                  <motion.p
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >MYSQL MongoDB</motion.p>
                  <motion.h4
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >
                    - etc</motion.h4>
                  <motion.p
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >git photoshop illustrator indesign</motion.p>
                </>
              )}
              {title === "CAREER" && (
                <>
                  <motion.h4
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >바른웹</motion.h4>
                  <motion.p
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >2021.9 ~ 23.10(2년 2개월)</motion.p>
                  <motion.p
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >퍼블리셔/디자인</motion.p>
                  <motion.p
                    initial={{ y: 20 }}
                    animate={inView ? { y: 0 } : { y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ translateY: springTranslateYForContent }}
                  >홈페이지 제작업무</motion.p>
                </>
              )}
            </li>
          );
        })}
        <div ref={bottomRef} className={`${pageStyle.bottom} bottom`}>
      <p>
        {bottomP.first.map((char, index) => (
          <motion.span
            key={index}
            variants={variants}
            initial={scrollProgress > index / bottomP.first.length ? 'visible' : 'hidden'}
            animate={scrollProgress > index / bottomP.second.length ? 'visible' : 'hidden'}
            transition={{ ease: [0.42, 0, 0.58, 1], delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </p>
      <p>
        {bottomP.second.map((char, index) => (
          <motion.span
            key={index}
            variants={variants}
            initial={scrollProgress > index / bottomP.second.length ? 'visible' : 'hidden'}
            animate={scrollProgress > index / bottomP.second.length ? 'visible' : 'hidden'}
            transition={{ ease: [0.42, 0, 0.58, 1] , delay: index * 0.1}}
          >
            {char}
          </motion.span>
        ))}
      </p>
      <p>
        {bottomP.third.map((char, index) => (
          <motion.span
            key={index}
            variants={variants}
            initial={scrollProgress > index / bottomP.third.length ? 'visible' : 'hidden'}
            animate={scrollProgress > index / bottomP.second.length ? 'visible' : 'hidden'}
            transition={{ ease: [0.42, 0, 0.58, 1], delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </div> 
        </ul>
      </section>
    );
  }

export default Sec4
