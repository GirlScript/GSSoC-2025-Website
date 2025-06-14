'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const CountUp = ({ end, duration = 2, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: duration,
        onUpdate: (latest) => {
          setCount(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
    >
      {count}{suffix}
    </motion.div>
  );
};

export default CountUp; 