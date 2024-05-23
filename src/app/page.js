"use client";
import React, { useRef, useState, useEffect } from "react";
import pageStyle from '../app/page.module.css'
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Sec1 from "./_components/Sec1";
import Sec2 from "./_components/Sec2";
import Sec3 from "./_components/Sec3";
import Sec4 from "./_components/Sec4";
import Sec5 from "./_components/Sec5";
import Sec6 from "./_components/Sec6";

export default function Home() {
  const sec3Ref = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewHeight(window.innerHeight);
    }
  }, []);

  const { scrollY } = useScroll();
  const start = sec3Ref.current ? sec3Ref.current.offsetTop : 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= start) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    const handleResize = () => {
      setViewHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [start]);

  const scale = useTransform(scrollY, [start, start + viewHeight], [0, 30]);
  const springScale = useSpring(scale, { stiffness: 50, damping: 20 });

  return (
    <main className={pageStyle.main}>
      <Sec1/>
      <Sec2/>
      <Sec3 start={start} viewHeight={viewHeight}/>
      <div className={pageStyle.mt20vh}></div>
      <Sec4 viewHeight={viewHeight}/>
      <Sec5/>
      <Sec6/>

    </main>
  );
}