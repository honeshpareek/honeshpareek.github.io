import React from 'react';

export const Gallery = () => {
  const images = [
    { id: 1, src: 'https://honeshraipareek.github.io/photography/1970-01-20-041840867.jpg', width: '400px' },
    { id: 2, src: 'https://honeshraipareek.github.io/photography/Jaipur.jpg', width: '300px' },
    { id: 3, src: 'https://honeshraipareek.github.io/photography/taara.jpg', width: '600px' },
    // Add more images with varied widths as needed
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt={`Image ${image.id}`} className="w-full h-auto" style={{ width: image.width }} />
        </div>
      ))}
    </div>
  );
};
