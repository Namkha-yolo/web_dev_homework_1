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
      <section id="menu" className="py-20 px-[5%] max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gold mb-12">
          Our Menu
        </h2>
        <div className="text-center text-gray-600">Loading menu...</div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 px-[5%] max-w-7xl mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gold mb-12">
        Our Menu
      </h2>
      {error && (
        <p className="text-center text-gray-500 text-sm mb-4">{error}</p>
      )}
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
