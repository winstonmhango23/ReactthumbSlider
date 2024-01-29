// SlideControlArrows.tsx
import React from 'react';

interface SlideControlArrowsProps {
    onPrevClick: () => void;
    onNextClick: () => void;
}

const SlideControlArrows: React.FC<SlideControlArrowsProps> = ({ onPrevClick, onNextClick }) => {
    return (
        <div className="arrows">
            <button onClick={onPrevClick}>{'<'}</button>
            <button onClick={onNextClick}>{'>'}</button>
        </div>
    );
};

export default SlideControlArrows;
