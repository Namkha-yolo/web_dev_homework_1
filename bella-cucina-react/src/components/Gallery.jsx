import { useState, useEffect } from 'react';
import { galleryImages } from '../data/menuData';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#b8860b] uppercase tracking-[0.3em] text-sm mb-4">Gallery</p>
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Our Atmosphere
          </h2>
          <div className="w-16 h-[1px] bg-[#b8860b] mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-[300px] md:h-full' : 'h-[200px] md:h-[250px]'
                }`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm uppercase tracking-wider">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
