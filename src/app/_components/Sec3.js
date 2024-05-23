import React, { useRef } from "react";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import pageStyle from '../../app/page.module.css'

const Sec3 = ({ start, viewHeight }) => {
    const { scrollY } = useScroll();
  const sec3Ref = useRef(null);

  const scale = useTransform(scrollY, [start, start + viewHeight], [0, 30]);
  const springScale = useSpring(scale, { stiffness: 50, damping: 20 });

  return (
    <section className={`${pageStyle.sec} ${pageStyle.sec3}`} ref={sec3Ref}>
      <motion.div
        className={pageStyle.circle}
        style={{
          scale: springScale,
        }}
      />
    </section>
  );
};

export default Sec3;