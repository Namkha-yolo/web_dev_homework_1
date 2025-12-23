import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50" style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}>
      <nav className="flex justify-between items-center px-6 py-5 max-w-6xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-bold text-white no-underline"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <span className="text-gold">Bella</span> Cucina
        </a>

        {/* Navigation Links */}
        <ul className={`
          flex list-none gap-8
          md:flex md:relative md:top-0 md:left-0 md:flex-row md:bg-transparent md:p-0
          ${isMenuOpen
            ? 'fixed left-0 top-[72px] flex-col w-full text-center py-8 gap-0'
            : 'hidden md:flex'}
        `}
        style={isMenuOpen ? { backgroundColor: 'rgba(0,0,0,0.98)' } : {}}
        >
          {navLinks.map(link => (
            <li key={link.href} className="py-4 md:py-0">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 no-underline text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Cart Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleCart}
            className="flex items-center gap-2 text-white cursor-pointer text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span
                className="w-5 h-5 flex items-center justify-center text-xs font-bold text-black"
                style={{ backgroundColor: '#d4af37' }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu */}
          <div
            className="flex flex-col cursor-pointer gap-1.5 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: '#d4af37' }}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#d4af37' }}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: '#d4af37' }}></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
