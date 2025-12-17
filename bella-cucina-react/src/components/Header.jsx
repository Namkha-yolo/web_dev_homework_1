import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
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
    <header className="fixed w-full top-0 z-50 bg-black/90 shadow-lg">
      <nav className="flex justify-between items-center px-[5%] py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl md:text-3xl font-bold text-gold italic no-underline"
        >
          Bella Cucina
        </a>

        {/* Navigation Links */}
        <ul className={`
          flex list-none gap-8
          md:flex md:relative md:top-0 md:left-0 md:flex-row md:bg-transparent md:p-0
          ${isMenuOpen
            ? 'fixed left-0 top-[70px] flex-col bg-black/95 w-full text-center py-8 gap-0'
            : 'hidden md:flex'}
        `}>
          {navLinks.map(link => (
            <li key={link.href} className="py-4 md:py-0">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white no-underline text-lg hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Cart Icon */}
        <div
          onClick={toggleCart}
          className="flex items-center gap-2 text-gold cursor-pointer text-lg px-3 py-2 border-2 border-gold rounded hover:bg-gold hover:text-black transition-all duration-300"
        >
          <span className="font-bold hidden sm:inline">Cart</span>
          <span className="text-xl">🛒</span>
          <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {cartCount}
          </span>
        </div>

        {/* Hamburger Menu */}
        <div
          className="flex flex-col cursor-pointer gap-1 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${isMenuOpen ? 'rotate-[-45deg] translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${isMenuOpen ? 'rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </nav>
    </header>
  );
}
