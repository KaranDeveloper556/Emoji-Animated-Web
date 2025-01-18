import React from 'react'
import { motion } from 'framer-motion'
import HeadingIcon from '../../assets/web-images/HeadingIcons.png'

const Heading = ({ title, subtitle, icon = HeadingIcon }) => {
  return (
    <div className='heading relative flex flex-col justify-center gap-2'>
      <div className="heading-content flex items-center justify-center gap-2">
        <motion.div
          className="rotating-emoji"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <img src={icon} alt="heading-icons" className='w-[5rem] md:w-[7rem] lg:w-[10rem] h-auto object-contain' />
        </motion.div>

        <div className="texts text-center mt-6 font-DisplayFont">
          <h2 className="title text-7xl font-bold text-white mb-3">
            {title || "Default Title"}
          </h2>
          {subtitle && (
            <p className="subtitle text-xl text-white/80">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Heading