import { useState, useEffect } from 'react';
import { galleryImages } from '../data/menuData';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (direction) => {
    setCurrentIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex >= galleryImages.length) return 0;
      if (newIndex < 0) return galleryImages.length - 1;
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" style={{ backgroundColor: '#1a1a1a' }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Visual Journey</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Gallery
          </h2>
        </div>

        {/* Main Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative h-[400px] md:h-[600px]">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={() => moveSlide(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => moveSlide(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 right-6 text-white text-sm">
            <span className="text-gold font-bold text-2xl">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-gray-500 mx-2">/</span>
            <span className="text-gray-500">{String(galleryImages.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 mt-8">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-20 h-14 overflow-hidden transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-gold' : 'opacity-50 hover:opacity-100'
              }`}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
