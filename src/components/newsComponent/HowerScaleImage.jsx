import React from 'react';

const HoverScaleImage = ({ imageUrl, alt }) => {
  return (
    <div className="relative overflow-hidden">
      <img
        className="block w-full h-auto transition-transform duration-300 transform-gpu hover:scale-105"
        src={imageUrl}
        alt={alt}
      />
    </div>
  );
};

export default HoverScaleImage;
