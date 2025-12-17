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
      className="h-screen flex items-center justify-center text-center text-white mt-[70px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600')`
      }}
    >
      <div className="px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gold mb-4 drop-shadow-lg">
          Bella Cucina
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience Authentic Italian Flavors
        </p>
        <a
          href="#menu"
          onClick={handleViewMenu}
          className="inline-block px-8 py-4 bg-gold text-black no-underline rounded font-bold hover:bg-gold-dark hover:-translate-y-1 transition-all duration-300"
        >
          View Our Menu
        </a>
      </div>
    </section>
  );
}
