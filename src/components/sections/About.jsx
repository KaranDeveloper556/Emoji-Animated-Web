import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EmojisDisplay from "../EmojisDisplay";
import { useGSAP } from "@gsap/react";

const About = () => {
  const text = `Emojis transform communication 🌍, breaking barriers 🌐 and adding personality ✨. Celebrate 🎉, show love ❤️, share joy 😂, or just have fun 😎 – express yourself effortlessly.`;
  const containerRef = useRef(null);
  const words = text.split(" ");

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wordElements = containerRef.current.querySelectorAll('.word');

    gsap.set(wordElements, {
      opacity: 0,
      y: 100,
      scaleX: 1.5
    });

    gsap.to(wordElements, {
      opacity: 1,
      y: 0,
      scaleX: 1,
      duration: 0.2,
      stagger: 0.05,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "10% 60%",
        end: "90% top"
      }
    });
  }, []);

  return (
    <section className="about_section relative bg-transparent font-SansSerif w-full z-[98]">
      <EmojisDisplay />
      <div className="about_section relative pt-[60rem] pb-[10rem] overflow-hidden">
        <div
          ref={containerRef}
          className="about-content relative mx-auto flex justify-center items-center font-SansSerif text-[5rem] max-w-[70rem] text-center leading-relaxed flex-wrap"
        >
          {words.map((word, index) => (
            <span
              key={index}
              className="word inline-block mx-1"
            >
              {word}&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
