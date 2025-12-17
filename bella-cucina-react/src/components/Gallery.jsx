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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-20 px-[5%] bg-gray-100">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gold mb-12">
        Gallery
      </h2>

      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg">
        {/* Slider Container */}
        <div className="relative h-[300px] md:h-[500px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => moveSlide(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-gold/80 text-white border-none px-4 py-3 text-xl cursor-pointer hover:bg-gold transition-colors duration-300 z-10"
        >
          &#10094;
        </button>
        <button
          onClick={() => moveSlide(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-gold/80 text-white border-none px-4 py-3 text-xl cursor-pointer hover:bg-gold transition-colors duration-300 z-10"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="text-center mt-6">
        {galleryImages.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`inline-block w-3 h-3 rounded-full mx-1 cursor-pointer transition-colors duration-300 ${
              index === currentIndex ? 'bg-gold' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
