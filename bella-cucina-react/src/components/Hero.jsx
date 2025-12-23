export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center px-4 max-w-4xl">
        <p className="text-[#b8860b] uppercase tracking-[0.4em] text-sm mb-6 font-medium">
          Welcome to
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Bella Cucina
        </h1>
        <div className="w-24 h-[1px] bg-[#b8860b] mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl text-white/80 mb-10 font-light">
          Authentic Italian Cuisine Since 1985
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#b8860b] text-white uppercase tracking-wider text-sm font-medium hover:bg-[#996f0a] transition-all"
          >
            View Our Menu
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border-2 border-white text-white uppercase tracking-wider text-sm font-medium hover:bg-white hover:text-black transition-all"
          >
            Book a Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
