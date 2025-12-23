import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { menuApi } from '../services/api';
import { menuData as fallbackMenuData } from '../data/menuData';

export default function Menu() {
  const { addToCart } = useCart();
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await menuApi.getAll();
        setMenuData(data);
      } catch (err) {
        console.error('Using fallback data:', err);
        setMenuData(fallbackMenuData);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  if (loading) {
    return (
      <section id="menu" className="py-20 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[#b8860b] uppercase tracking-[0.3em] text-sm mb-4">Discover</p>
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our Menu</h2>
          <p className="text-gray-500">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#b8860b] uppercase tracking-[0.3em] text-sm mb-4">Discover</p>
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our Menu</h2>
          <div className="w-16 h-[1px] bg-[#b8860b] mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuData.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-all ${
                activeTab === index
                  ? 'bg-[#b8860b] text-white'
                  : 'bg-white text-gray-600 hover:text-[#b8860b] border border-gray-200'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuData[activeTab]?.items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 flex justify-between items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                    {item.name}
                  </h3>
                  <span className="flex-1 border-b border-dotted border-gray-300"></span>
                  <span className="text-[#b8860b] font-bold text-lg">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="text-[#b8860b] text-sm uppercase tracking-wider font-medium hover:text-[#996f0a] transition-colors"
                >
                  + Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
