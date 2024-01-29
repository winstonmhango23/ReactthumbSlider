// Thumbnail.tsx
import React from 'react';

interface ThumbnailProps {
    items: { src: string }[];
    activeIndex: number;
    onClick: (index: number) => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ items, activeIndex, onClick }) => {
    return (
        <div className="thumbnail">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`item ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => onClick(index)}
                >
                    <img src={item.src} alt={`Thumbnail ${index + 1}`} />
                    <div className="content">BMW Model</div>
                </div>
            ))}
        </div>
    );
};

export default Thumbnail;
