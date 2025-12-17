import { useCart } from '../context/CartContext';

export default function Notification() {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="fixed top-24 right-5 bg-green-700 text-white px-6 py-4 rounded shadow-xl z-[3000] font-bold animate-slide-in">
      &#10003; {notification} added to cart
    </div>
  );
}
