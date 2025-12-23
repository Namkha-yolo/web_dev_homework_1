import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { menuApi } from '../services/api';
import { menuData as fallbackMenuData } from '../data/menuData';

export default function Menu() {
  const { addToCart } = useCart();
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await menuApi.getAll();
        setMenuData(data);
        setActiveCategory(data[0]?.category || null);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch menu from API, using fallback data:', err);
        setMenuData(fallbackMenuData);
        setActiveCategory(fallbackMenuData[0]?.category || null);
        setError('Using cached menu data');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return (
      <section id="menu" style={{ backgroundColor: '#1a1a1a' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Selection</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            The Menu
          </h2>
          <p className="text-gray-400 text-lg">Loading menu...</p>
        </div>
      </section>
    );
  }

  const currentCategory = menuData.find(cat => cat.category === activeCategory);

  return (
    <section id="menu" style={{ backgroundColor: '#1a1a1a' }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Our Selection</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            The Menu
          </h2>
          {error && <p className="text-gray-500 text-sm">{error}</p>}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {menuData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-3 text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.category
                  ? 'text-black'
                  : 'text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500'
              }`}
              style={activeCategory === category.category ? { backgroundColor: '#d4af37' } : {}}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {currentCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {currentCategory.items.map((item) => (
              <div
                key={item.id}
                className="group border-b border-gray-800 pb-8"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-gold transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                    {item.name}
                  </h3>
                  <span className="text-gold text-xl md:text-2xl font-bold ml-4">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="text-gold text-sm uppercase tracking-wider font-medium hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <span>Add to Cart</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
