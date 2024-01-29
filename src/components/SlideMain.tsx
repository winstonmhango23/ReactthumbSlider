// SlideMain.tsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TextContainer from './TextContainer';
import SlideControlArrows from './SlideControlArrows';
import SlideImages from './SlideImages';
import Thumbnail from './Thumbnail';

interface SlideMainProps {
    // Add any necessary props here
}

const SlideMain: React.FC<SlideMainProps> = () => {
    const [itemActive, setItemActive] = useState<number>(0);

    const items = [
        { src: 'image/img1.png', title: 'Slider 01', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
        { src: 'image/img2.jpg', title: 'Slider 02', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
        { src: 'image/img3.jpg', title: 'Slider 03', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
        { src: 'image/img4.jpg', title: 'Slider 04', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
        { src: 'image/img5.jpg', title: 'Slider 05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
    ];

    const showSlider = (index: number) => {
        setItemActive(index);
    };

    const handlePrevClick = () => {
        setItemActive((prevItemActive) => (prevItemActive - 1 + items.length) % items.length);
    };

    const handleNextClick = () => {
        setItemActive((prevItemActive) => (prevItemActive + 1) % items.length);
    };

    useEffect(() => {
        const refreshInterval = setInterval(() => {
            handleNextClick();
        }, 5000);

        return () => clearInterval(refreshInterval);
    }, [itemActive]);

    return (
        <div>
            <Navbar />
            <div className="slider">
                {/* Slide Images */}
                <div className="list">
                    {items.map((item, index) => (
                        <SlideImages
                            key={index}
                            src={item.src}
                            alt={`Slider ${index + 1}`}
                            active={index === itemActive}
                            onClick={() => showSlider(index)}
                        />
                    ))}
                </div>
                {/* Conditional Rendering of TextContainer */}
                {items.map((item, index) => (
                    index === itemActive && (
                        <TextContainer
                            key={index}
                            title={item.title}
                            description={item.description}
                        />
                    )
                ))}
                {/* Slide Control Arrows */}
                <SlideControlArrows onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
                {/* Thumbnail */}
                <Thumbnail
                    items={items}
                    activeIndex={itemActive}
                    onClick={(index) => showSlider(index)}
                />
            </div>
        </div>
    );
};

export default SlideMain;
