export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#0d0d0d' }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
              alt="Restaurant ambiance"
              className="w-full h-[500px] object-cover"
            />
            <div
              className="absolute -bottom-8 -right-8 w-48 h-48 hidden lg:block"
              style={{ backgroundColor: '#d4af37' }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-black">
                <span className="text-5xl font-bold">40</span>
                <span className="text-sm uppercase tracking-wider">Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              A Legacy of<br />Italian Tradition
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Welcome to Bella Cucina, where passion meets tradition. Founded in 1985 by the Rossi family, we brought authentic Italian recipes from the hills of Tuscany to share with the world.
              </p>
              <p>
                For nearly four decades, we&apos;ve served the finest Italian cuisine, made with love and the freshest ingredients. Our signature dishes are prepared using recipes passed down through generations.
              </p>
              <p>
                From our wood-fired pizzas to our handmade pasta, every dish is crafted with care and attention to detail.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <span className="text-gold text-4xl font-bold">150+</span>
                <p className="text-gray-500 text-sm uppercase tracking-wider mt-2">Dishes</p>
              </div>
              <div>
                <span className="text-gold text-4xl font-bold">50k+</span>
                <p className="text-gray-500 text-sm uppercase tracking-wider mt-2">Happy Guests</p>
              </div>
              <div>
                <span className="text-gold text-4xl font-bold">15</span>
                <p className="text-gray-500 text-sm uppercase tracking-wider mt-2">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
