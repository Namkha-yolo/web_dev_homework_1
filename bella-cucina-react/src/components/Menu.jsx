import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { menuApi } from '../services/api';
import { menuData as fallbackMenuData } from '../data/menuData';

export default function Menu() {
  const { addToCart } = useCart();
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await menuApi.getAll();
        setMenuData(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch menu from API, using fallback data:', err);
        setMenuData(fallbackMenuData);
        setError('Using cached menu data');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return (
      <section id="menu" className="py-24 px-[5%] bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gold mb-4">
            Our Menu
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Authentic Italian dishes made with love
          </p>
          <div className="text-center text-gray-500 text-lg">Loading menu...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-24 px-[5%] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gold mb-4">
          Our Menu
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Authentic Italian dishes made with love
        </p>
        {error && (
          <p className="text-center text-gray-500 text-sm mb-4">{error}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuData.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-gold text-2xl font-bold mb-6 pb-3 border-b-2 border-gold">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start gap-4 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0"
                  >
                    <div className="flex-1">
                      <h4 className="text-gray-800 text-lg font-semibold mb-1">
                        {item.name}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className="text-gold font-bold text-xl">
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gold text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-gold-dark hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-md"
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
      </div>
    </section>
  );
}
