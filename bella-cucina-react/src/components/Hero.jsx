export default function Hero() {
  const handleViewMenu = (e) => {
    e.preventDefault();
    const menu = document.querySelector('#menu');
    if (menu) {
      menu.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="text-center px-6 max-w-5xl">
        <p className="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium">
          Authentic Italian Cuisine
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          Bella Cucina
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience the finest Italian flavors, crafted with passion and tradition since 1985
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            onClick={handleViewMenu}
            style={{ backgroundColor: '#d4af37' }}
            className="px-10 py-4 text-black font-bold text-lg rounded-none hover:opacity-90 transition-all duration-300 uppercase tracking-wider"
          >
            View Menu
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-none hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
          >
            Reservations
          </a>
        </div>
      </div>
    </section>
  );
}
