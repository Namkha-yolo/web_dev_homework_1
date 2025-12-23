import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed w-full top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? '#1a1a1a' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <nav className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-bold text-white tracking-wide"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          BELLA CUCINA
        </a>

        <ul className={`
          flex list-none gap-8
          md:flex md:relative md:flex-row md:bg-transparent
          ${isMenuOpen ? 'fixed left-0 top-[70px] flex-col w-full text-center py-8 gap-0 bg-[#1a1a1a]' : 'hidden md:flex'}
        `}>
          {navLinks.map(link => (
            <li key={link.href} className="py-3 md:py-0">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/80 hover:text-[#b8860b] text-sm uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleCart}
            className="flex items-center gap-2 px-4 py-2 border border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-white transition-all text-sm uppercase tracking-wider"
          >
            Cart ({cartCount})
          </button>

          <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </div>
      </nav>
    </header>
  );
}
