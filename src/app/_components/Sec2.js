import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import pageStyle from '../../app/page.module.css'

const Sec2 = () => {
    const [txt, setTxt] = useState(['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'])
    const [name, setName] = useState(['H', 'A', 'N', ' ', 'S', 'A', 'N', 'G', ' ', 'E', 'U', 'N'])
    const [txtIndex, setTxtIndex] = useState(0);
    const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const txtTimer = setTimeout(() => {
      if (txtIndex < txt.length - 1) {
        setTxtIndex(txtIndex + 1);
      }
    }, 1);
  
    const nameTimer = setTimeout(() => {
      if (nameIndex < name.length - 1) {
        setNameIndex(nameIndex + 1);
      }
    }, 1);
  
    return () => {
      clearTimeout(txtTimer);
      clearTimeout(nameTimer);
    };
  }, [txtIndex, txt, nameIndex, name]);

  return (
    <section className={`${pageStyle.sec} ${pageStyle.sec2}`}>
      <div className={pageStyle.tit}>
        <h2>
          {txt.map((i, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={index <= txtIndex ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.08 }}
            >
              {i}
            </motion.span>
          ))}

        </h2>
        <h2>
          {name.map((i, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={index <= nameIndex ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.08 }}
            >
              {i}
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  );
}

export default Sec2;
