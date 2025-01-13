import Canvas from './Canvas';
import imagesData from '../assets/frames/imagesData';

const EmojisDisplay = () => {
    return (
        <section className="Emojigy_web absolute">
            {imagesData.map((elem, index) => (
                <Canvas
                    key={elem.id || index}
                    details={{ ...elem }}
                />
            ))}
        </section>
    );
};

export default EmojisDisplay;
