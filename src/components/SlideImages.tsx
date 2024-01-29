// SlideImages.tsx
// import React from 'react';

// interface SlideImagesProps {
//     src: string;
//     alt: string;
// }

// const SlideImages: React.FC<SlideImagesProps> = ({ src, alt }) => {
//     return (
//         <div className="item">
//             <img src={src} alt={alt} />
//         </div>
//     );
// };

// export default SlideImages;



// // SlideImages.tsx
// import React from 'react';

// interface SlideImagesProps {
//     src: string;
//     alt: string;
//     active: boolean;
// }

// const SlideImages: React.FC<SlideImagesProps> = ({ src, alt, active }) => {
//     return (
//         <div className={`item ${active ? 'active' : ''}`}>
//             <img src={src} alt={alt} />
//         </div>
//     );
// };

// export default SlideImages;

// SlideImages.tsx
import React from 'react';

interface SlideImagesProps {
    src: string;
    alt: string;
    active: boolean;
    onClick: () => void;
}

const SlideImages: React.FC<SlideImagesProps> = ({ src, alt, active, onClick }) => {
    return (
        <div className={`item ${active ? 'active' : ''}`} onClick={onClick}>
            <img src={src} alt={alt} />
        </div>
    );
};

export default SlideImages;
