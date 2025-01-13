import React from 'react'
import EmojisDisplay from '../EmojisDisplay'

const About = () => {
  return (
    <section className="about_section relative bg-transparent font-SansSerif w-full overflow-hidden z-[98]">
      <EmojisDisplay />
      <div className="about_section relative py-[60rem]">
        <p className="about-content relative mx-auto flex justify-center items-center text-6xl max-w-[55rem] text-center font-bold leading-relaxed">
          Emojis transform communication 🌍, breaking barriers 🌐 and adding personality ✨. Celebrate 🎉, show love ❤️, share joy 😂, or just have fun 😎 – express yourself effortlessly.
        </p>
      </div>
    </section>
  )
}

export default About
