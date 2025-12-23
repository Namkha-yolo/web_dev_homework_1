export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
              alt="Restaurant"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#b8860b] text-white p-8 hidden md:block">
              <span className="text-5xl font-bold block" style={{ fontFamily: 'Georgia, serif' }}>40</span>
              <span className="text-sm uppercase tracking-wider">Years of Excellence</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#b8860b] uppercase tracking-[0.3em] text-sm mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              A Tradition of Italian Excellence
            </h2>
            <div className="w-16 h-[1px] bg-[#b8860b] mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to Bella Cucina, where passion meets tradition. Founded in 1985 by the Rossi family, we brought authentic Italian recipes from the hills of Tuscany to share with the world.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              For nearly four decades, we&apos;ve been serving the finest Italian cuisine, made with love and the freshest ingredients. Every dish tells a story of Italian heritage and culinary excellence.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <span className="text-3xl font-bold text-[#b8860b] block" style={{ fontFamily: 'Georgia, serif' }}>150+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Recipes</span>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-[#b8860b] block" style={{ fontFamily: 'Georgia, serif' }}>50k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Guests</span>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-[#b8860b] block" style={{ fontFamily: 'Georgia, serif' }}>15</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Awards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
