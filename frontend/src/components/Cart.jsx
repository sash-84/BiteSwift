import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  // Sample Cart Items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pepperoni Pizza", img: "/assets/pizza.jpeg", price: 350, quantity: 1 },
    { id: 2, name: "Cheese Burger", img: "/assets/burger.jpeg", price: 180, quantity: 1 },
    { id: 3, name: "Sushi Platter", img: "/assets/sushi.jpeg", price: 450, quantity: 1 },
  ]);

  // Function to update quantity
  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  // Function to remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
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
            <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
              {/* Image */}
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />

              {/* Name & Price */}
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-red-500 font-bold">₹{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center">
                <button
                  className="bg-gray-200 px-2 py-1 rounded-l text-lg"
                  onClick={() => updateQuantity(item.id, -1)}
                >-</button>
                <span className="px-4">{item.quantity}</span>
                <button
                  className="bg-gray-200 px-2 py-1 rounded-r text-lg"
                  onClick={() => updateQuantity(item.id, 1)}
                >+</button>
              </div>

              {/* Remove Button */}
              <button className="text-red-600 ml-4" onClick={() => removeItem(item.id)}>
                <FaTrashAlt size={18} />
              </button>
            </div>
          ))}

          {/* Total & Checkout */}
          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
            <button className="bg-red-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-red-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;