import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const {
    cart,
    isCartOpen,
    cartTotal,
    toggleCart,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[1500] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleCart}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-full w-full sm:w-[400px] bg-white shadow-xl z-[2000] flex flex-col transition-all duration-300 ease-in-out ${
          isCartOpen ? 'right-0' : '-right-full sm:-right-[400px]'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 bg-dark text-white">
          <h2 className="text-gold text-2xl font-bold">Shopping Cart</h2>
          <button
            onClick={toggleCart}
            className="bg-transparent border-none text-white text-3xl cursor-pointer hover:text-gold transition-colors duration-300 p-0 w-8 h-8 flex items-center justify-center"
          >
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 py-8 italic">
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start p-4 border-b border-gray-200"
                >
                  <div className="flex-1">
                    <div className="font-bold text-gray-800 mb-1">
                      {item.name}
                    </div>
                    <div className="text-gold text-sm mb-2">
                      ${item.price.toFixed(2)} each
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-gold border-none text-white w-6 h-6 rounded cursor-pointer font-bold hover:bg-gold-dark transition-colors duration-300"
                      >
                        -
                      </button>
                      <span className="font-bold min-w-[30px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-gold border-none text-white w-6 h-6 rounded cursor-pointer font-bold hover:bg-gold-dark transition-colors duration-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="font-bold text-gray-800 text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 text-white border-none px-3 py-1 rounded cursor-pointer text-sm hover:bg-red-700 transition-colors duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-100 border-t-2 border-gold">
          <div className="flex justify-between items-center text-xl mb-4 pb-4 border-b border-gray-300">
            <strong className="text-gray-800">Total:</strong>
            <span className="text-gold font-bold">${cartTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={clearCart}
            className="w-full bg-gray-500 text-white border-none px-4 py-3 rounded font-bold cursor-pointer mb-2 hover:bg-gray-600 transition-colors duration-300"
          >
            Clear Cart
          </button>
          <button className="w-full bg-green-700 text-white border-none px-4 py-3 rounded font-bold cursor-pointer hover:bg-green-800 transition-colors duration-300">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
