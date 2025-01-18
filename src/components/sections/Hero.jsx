import { useGSAP } from '@gsap/react'
import HeroImg from '../../assets/web-images/hero-img.jpeg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Frames from "../../assets/frames/images"
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const frameCount = 121;
        const currentFrame = (index) => Frames[index + (Frames.length - 121)];

        canvas.width = 1000;
        canvas.height = 800;

        const images = [];
        let frame = 0;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }

        images[0].onload = function () {
            ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
        }

        const updateImage = (index) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
        }

        ScrollTrigger.create({
            trigger: '.Hero_section',
            start: '-80px top',
            end: '1500vh center', // Increased scroll length
            onUpdate: (self) => {
                const frameIndex = Math.min(
                    frameCount - 1,
                    Math.floor(self.progress * frameCount)
                );
                if (frameIndex !== frame) {
                    frame = frameIndex;
                    updateImage(frame);
                }
            }
        });
    }, []);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.Hero_section',
                    start: '-80px top',
                    end: '1550dvh center',
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                }
            });

            tl.to(['.hero-univ', '.hero-lang'], {
                x: (i) => i === 0 ? -1250 : 1200,
                duration: 5, // Increased duration
                opacity: 0
            })
                .to(['.playfull-element', '.hero-para'], {
                    opacity: 0,
                    duration: 3 // Added duration
                }, "<")
                .fromTo('.canvas-wrapper canvas', {
                    y: 100,
                    opacity: 0.4,
                    scale: 1,
                    zIndex: 9,
                }, {
                    opacity: 1,
                    scale: 2.5,
                    duration: 4,
                    zIndex: 99,
                    ease: "power2.inOut"
                }, "<");
        }
    )
    return (
        <section className="Hero_section relative h-dvh w-dvw">
            <div className="Content absolute px-[2rem] w-full h-full z-[99] overflow-hidden">
                <div className="hero-text relative flex justify-between items-center" id="hero-text-1">
                    <div className="hero-univ text-[21dvw] leading-[0px] font-DisplayFont font-extrabold pointer-events-none">Global</div>
                    <div className="playfull-element relative h-[40dvh] w-full">
                        <img src={HeroImg} alt="Magician" className="relative h-full w-full object-cover rounded-3xl" />
                    </div>
                </div>
                <div className="hero-text relative flex justify-between items-center gap-[1dvw]" id="hero-text-2">
                    <div className="hero-para relative top-[3dvh] w-full text-[2dvw] font-SansSerif text-gray-400">Make every message memorable with emojis that capture the moment and showcase your personality.</div>
                    <div className="hero-lang text-[21dvw] leading-[0px] font-DisplayFont font-extrabold pointer-events-none">Tongue</div>
                </div>
            </div>
            <div className="illustration absolute -top-[25vh] left-0 h-dvh w-dvw flex justify-center items-center">
                <div className="canvas-wrapper relative w-full h-dvh flex justify-center items-center">
                    <canvas ref={canvasRef} className="mx-auto absolute w-[32dvw] rounded-3xl" />
                </div>
            </div>
        </section>
    )
}

export default Hero
