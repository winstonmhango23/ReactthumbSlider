// TextContainer.tsx
import React from 'react';

interface TextContainerProps {
    title: string;
    description: string;
}

const TextContainer: React.FC<TextContainerProps> = ({ title, description }) => {
    return (
        <div className="content">
            <p>design</p>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default TextContainer;
