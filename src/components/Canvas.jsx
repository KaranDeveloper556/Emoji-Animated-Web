import gsap from 'gsap';
import { useState, useEffect, useRef } from 'react';
import Frames from '../assets/frames/images';

const Canvas = ({ details }) => {
    const { startIndex, endIndex, duration, size, top, left, zIndex } = details;
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const canvasRef = useRef(null);
    const gsapRef = useRef(null);

    // GSAP Animation
    useEffect(() => {
        gsapRef.current = gsap.to(
            { value: startIndex },
            {
                value: endIndex,
                duration: duration - 1,
                repeat: -1,
                ease: 'linear',
                onUpdate: function () {
                    setCurrentIndex(Math.round(this.targets()[0].value));
                },
            }
        );

        return () => {
            if (gsapRef.current) {
                gsapRef.current.kill();
            }
        };
    }, [startIndex, endIndex, duration]);

    // Canvas Rendering
    useEffect(() => {
        const scale = window.devicePixelRatio || 1;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const image = new Image();
        image.src = Frames[currentIndex];

        image.onload = () => {
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
            ctx.scale(scale, scale);
            ctx.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        };
    }, [currentIndex]);

    return (
        <canvas
            data-scroll
            data-scroll-section
            data-scroll-speed={(Math.random() * 2)-1}
            ref={canvasRef}
            id="Emoji_Elem"
            className="Emojis_Elems absolute"
            style={{
                width: `${size + 10}px`,
                height: `${size + 10}px`,
                top: `${top}%`,
                left: `${left}%`,
                zIndex: zIndex,
            }}
        ></canvas>
    );
};

export default Canvas;
