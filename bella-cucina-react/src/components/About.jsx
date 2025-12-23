export default function About() {
  return (
    <section id="about" className="py-24 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gold mb-4">
          Our Story
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          A tradition of excellence since 1985
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to Bella Cucina, where passion meets tradition. Our restaurant was founded in 1985 by the Rossi family, who brought their authentic Italian recipes from the hills of Tuscany to share with the world.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              For nearly four decades, we&apos;ve been serving the finest Italian cuisine, made with love and the freshest ingredients. Our signature dishes are prepared using recipes passed down through generations.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              From our wood-fired pizzas to our handmade pasta, every dish is crafted with care. We believe that great food brings people together, and our mission is to create memorable dining experiences.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
              alt="Restaurant ambiance"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
