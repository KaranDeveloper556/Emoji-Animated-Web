import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let rafId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
        if (!isVisible) {
          setIsVisible(true);
        }
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible, setIsVisible]);

  return (
    <motion.div
      className={`fixed w-[6rem] h-[6rem] rounded-full pointer-events-none z-[9999] ${isVisible ? 'visible' : 'hidden'
        }`}
      animate={{
        x: mousePosition.x - 7,
        y: mousePosition.y - 5,
        scale: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        damping: 50,
        stiffness: 800,
      }}
    >
      <div className="circle bg-white h-[2rem] w-[2rem] rounded-full"></div>
    </motion.div>
  );
};

export default Cursor;
