import { useGSAP } from '@gsap/react'
import HeroImg from '../../assets/web-images/hero-img.jpeg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Frames from '../../assets/frames/images'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const frameCount = 121;
        const currentFrame = (index) => Frames[index + 1090];

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
                    end: '1550vh center',
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
                    scale: 2,
                    duration: 4,
                    zIndex: 99,
                    ease: "power2.inOut"
                }, "<");
        }
    )
    return (
        <section className="Hero_section relative">
            <div className="Content absolute px-8 py-10 w-dvh max-w-[100rem] z-[99] overflow-x-hidden">
                <div className="hero-text relative flex justify-center items-center gap-[4rem]" id="hero-text-1">
                    <div className="hero-univ text-[15rem] leading-none font-extrabold">Universal</div>
                    <div className="playfull-element relative h-[12rem] max-w-[14rem]">
                        <img src={HeroImg} alt="Magician" className="h-full w-full object-cover rounded-3xl" />
                    </div>
                </div>
                <div className="hero-text relative flex justify-between items-center gap-[1rem]" id="hero-text-2">
                    <div className="hero-para relative top-3 max-w-[18rem] text-[1.5rem] font-light">Make every message memorable with emojis that capture the moment and showcase your personality.</div>
                    <div className="hero-lang text-[14rem] leading-none font-extrabold">Language</div>
                </div>
            </div>
            <div className="illustration relative h-full w-dvh max-w-[100rem] ">
                <div className="canvas-wrapper relative w-full h-full flex justify-center items-center">
                    <canvas ref={canvasRef} className="mx-auto relative w-[30rem] rounded-3xl" />
                </div>
            </div>
        </section>
    )
}

export default Hero
