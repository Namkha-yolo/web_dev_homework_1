export default function About() {
  return (
    <section id="about" className="py-20 px-[5%] max-w-7xl mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gold mb-12">
        Our Story
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <p className="text-lg leading-relaxed text-justify">
            Welcome to Bella Cucina, where passion meets tradition. Our restaurant was founded in 1985 by the Rossi family, who brought their authentic Italian recipes from the hills of Tuscany to share with the world.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            For nearly four decades, we&apos;ve been serving the finest Italian cuisine, made with love and the freshest ingredients. Our signature dishes are prepared using recipes passed down through generations, each telling a story of Italian heritage and culinary excellence.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            From our wood-fired pizzas to our handmade pasta, every dish is crafted with care and attention to detail. We believe that great food brings people together, and our mission is to create memorable dining experiences that transport you straight to the heart of Italy.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Join us for an unforgettable meal, where every bite is a celebration of Italian culture and tradition.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
            alt="Restaurant ambiance"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
