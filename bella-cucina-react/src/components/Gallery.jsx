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
    <section id="gallery" className="py-24 px-[5%] bg-dark">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-gold mb-4">
        Gallery
      </h2>
      <p className="text-center text-gray-400 mb-16 text-lg">
        A glimpse into our world
      </p>

      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white border-none w-12 h-12 rounded-full text-xl cursor-pointer hover:bg-gold transition-all duration-300 z-10 backdrop-blur-sm"
        >
          &#10094;
        </button>
        <button
          onClick={() => moveSlide(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white border-none w-12 h-12 rounded-full text-xl cursor-pointer hover:bg-gold transition-all duration-300 z-10 backdrop-blur-sm"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="text-center mt-8">
        {galleryImages.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`inline-block w-3 h-3 rounded-full mx-2 cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-gold w-8' : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
