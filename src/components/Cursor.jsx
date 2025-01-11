import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Mouse from "../assets/Mouse-gestures/mouse.png"

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
  }, [isVisible]);

  return (
    <motion.div
      className={`fixed w-[6rem] h-[6rem] rounded-full pointer-events-none z-[9999] ${isVisible ? 'visible' : 'hidden'
        }`}
      animate={{
        x: mousePosition.x - 50,
        y: mousePosition.y - 16,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        damping: 50,
        stiffness: 700,
      }}
    >
      <img src={Mouse} alt="arrow" className='w-full h-full object-fill' />
    </motion.div>
  );
};

export default Cursor;
