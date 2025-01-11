import Canvas from '../components/Canvas';
import imagesData from '../assets/frames/imagesData';

const EmojiWeb = () => {
    return (
        <section className="Emojigy_web" data-scroll-section>
            {imagesData.map((elem, index) => (
                <Canvas
                    key={elem.id || index}
                    details={{...elem}}
                />
            ))}
        </section>
    );
};

export default EmojiWeb;
