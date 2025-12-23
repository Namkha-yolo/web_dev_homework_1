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
      className="min-h-screen flex items-center justify-center text-center text-white pt-[70px] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600')`
      }}
    >
      <div className="px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gold mb-6 drop-shadow-lg tracking-tight">
          Bella Cucina
        </h1>
        <p className="text-xl md:text-3xl mb-10 text-gray-200 font-light">
          Experience Authentic Italian Flavors
        </p>
        <a
          href="#menu"
          onClick={handleViewMenu}
          className="inline-block px-10 py-4 bg-gold text-black no-underline rounded-full font-bold text-lg hover:bg-gold-dark hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          View Our Menu
        </a>
      </div>
    </section>
  );
}
