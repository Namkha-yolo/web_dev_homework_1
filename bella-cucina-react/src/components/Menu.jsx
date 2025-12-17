import { useCart } from '../context/CartContext';
import { menuData } from '../data/menuData';

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-20 px-[5%] max-w-7xl mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gold mb-12">
        Our Menu
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {menuData.map((category) => (
          <div
            key={category.category}
            className="bg-white rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-gold text-2xl font-bold mb-4 pb-2 border-b-2 border-gold">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-start pb-4 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex-1 mb-2 sm:mb-0">
                    <h4 className="text-gray-800 text-lg font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 w-full sm:w-auto justify-between sm:justify-start">
                    <span className="text-gold font-bold text-lg">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-gold-dark hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
