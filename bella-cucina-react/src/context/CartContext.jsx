import { createContext, useContext, useState, useEffect } from 'react';
import { ordersApi } from '../services/api';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [orderStatus, setOrderStatus] = useState({ loading: false, error: null, success: false });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('bellaCucinaCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bellaCucinaCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
    showNotification(item.name);
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, change) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
      return updatedCart;
    });
  };

  const clearCart = () => {
    if (cart.length > 0 && window.confirm('Are you sure you want to clear your cart?')) {
      setCart([]);
    }
  };

  const submitOrder = async (customerInfo = {}) => {
    if (cart.length === 0) {
      setOrderStatus({ loading: false, error: 'Cart is empty', success: false });
      return null;
    }

    setOrderStatus({ loading: true, error: null, success: false });

    try {
      const orderData = {
        items: cart,
        customerInfo
      };

      const order = await ordersApi.create(orderData);

      // Clear cart after successful order
      setCart([]);
      localStorage.removeItem('bellaCucinaCart');

      setOrderStatus({ loading: false, error: null, success: true });
      setIsCartOpen(false);

      return order;
    } catch (error) {
      console.error('Failed to submit order:', error);
      setOrderStatus({ loading: false, error: error.message, success: false });
      return null;
    }
  };

  const resetOrderStatus = () => {
    setOrderStatus({ loading: false, error: null, success: false });
  };

  const showNotification = (itemName) => {
    setNotification(itemName);
    setTimeout(() => setNotification(null), 2300);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      isCartOpen,
      notification,
      cartTotal,
      cartCount,
      orderStatus,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart,
      setIsCartOpen,
      submitOrder,
      resetOrderStatus
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
