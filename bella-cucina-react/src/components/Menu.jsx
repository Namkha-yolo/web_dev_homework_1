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
      <section id="menu" style={{ backgroundColor: '#faf8f5', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#b8860b', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '16px' }}>Discover</p>
          <h2 style={{ fontSize: '48px', fontFamily: 'Georgia, serif', marginBottom: '16px' }}>Our Menu</h2>
          <p style={{ color: '#666' }}>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" style={{ backgroundColor: '#faf8f5', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#b8860b', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '16px' }}>Discover</p>
          <h2 style={{ fontSize: '48px', fontFamily: 'Georgia, serif', marginBottom: '16px' }}>Our Menu</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#b8860b', margin: '0 auto' }}></div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '48px' }}>
          {menuData.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveTab(index)}
              style={{
                padding: '12px 24px',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                border: activeTab === index ? 'none' : '1px solid #ddd',
                backgroundColor: activeTab === index ? '#b8860b' : '#fff',
                color: activeTab === index ? '#fff' : '#666',
                transition: 'all 0.3s'
              }}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Menu Table */}
        <div style={{ backgroundColor: '#fff', padding: '32px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #b8860b' }}>
                <th style={{ textAlign: 'left', padding: '16px', fontFamily: 'Georgia, serif', fontSize: '18px', color: '#333' }}>Dish</th>
                <th style={{ textAlign: 'left', padding: '16px', fontFamily: 'Georgia, serif', fontSize: '18px', color: '#333' }}>Description</th>
                <th style={{ textAlign: 'right', padding: '16px', fontFamily: 'Georgia, serif', fontSize: '18px', color: '#333' }}>Price</th>
                <th style={{ textAlign: 'center', padding: '16px', fontFamily: 'Georgia, serif', fontSize: '18px', color: '#333' }}>Order</th>
              </tr>
            </thead>
            <tbody>
              {menuData[activeTab]?.items.map((item, index) => (
                <tr
                  key={item.id}
                  style={{
                    borderBottom: index === menuData[activeTab].items.length - 1 ? 'none' : '1px solid #eee',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#faf8f5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{ padding: '20px 16px', fontWeight: '600', fontSize: '16px', color: '#333' }}>
                    {item.name}
                  </td>
                  <td style={{ padding: '20px 16px', color: '#666', fontSize: '14px' }}>
                    {item.description}
                  </td>
                  <td style={{ padding: '20px 16px', textAlign: 'right', color: '#b8860b', fontWeight: '700', fontSize: '18px' }}>
                    ${item.price.toFixed(2)}
                  </td>
                  <td style={{ padding: '20px 16px', textAlign: 'center' }}>
                    <button
                      onClick={() => addToCart(item)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#b8860b',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'background-color 0.3s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#996f0a'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#b8860b'}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
