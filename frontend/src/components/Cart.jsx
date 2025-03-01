import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [
      { id: 1, name: "Pepperoni Pizza", img: "/assets/pizza.jpeg", price: 350, quantity: 1 },
      { id: 2, name: "Cheese Burger", img: "/assets/burger.jpeg", price: 180, quantity: 1 },
      { id: 3, name: "Sushi Platter", img: "/assets/sushi.jpeg", price: 450, quantity: 1 },
    ];
  });

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Update item quantity
  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between border-b pb-4 mb-4 transition-all hover:bg-gray-100 p-3 rounded-lg"
            >
              {/* Image */}
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg shadow-md" />

              {/* Name & Price */}
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-red-500 font-bold">₹{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center">
                <button
                  className="bg-gray-200 px-3 py-1 rounded-l text-lg hover:bg-gray-300 transition"
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity === 1}
                >-</button>
                <span className="px-4 font-semibold">{item.quantity}</span>
                <button
                  className="bg-gray-200 px-3 py-1 rounded-r text-lg hover:bg-gray-300 transition"
                  onClick={() => updateQuantity(item.id, 1)}
                >+</button>
              </div>

              {/* Remove Button */}
              <button 
                className="text-red-600 ml-4 hover:text-red-700 transition"
                onClick={() => removeItem(item.id)}
              >
                <FaTrashAlt size={18} />
              </button>
            </div>
          ))}

          {/* Total & Checkout */}
          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
            <div className="flex justify-end space-x-4 mt-4">
              <button 
                className="bg-gray-300 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-400 transition"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button 
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
