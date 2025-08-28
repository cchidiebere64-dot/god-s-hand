
// src/Order.tsx
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Paracetamol", price: 500, image: "/products/paracetamol.jpg" },
  { id: 2, name: "Amoxicillin", price: 1200, image: "/products/amoxicillin.jpg" },
  { id: 3, name: "Vitamin C", price: 800, image: "/products/vitamin-c.jpg" },
  { id: 4, name: "Blood Pressure Monitor", price: 15000, image: "/products/bp-monitor.jpg" },
];

export default function Order() {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [customer, setCustomer] = useState({ name: "", phone: "" });

  const addToCart = (product: Product) => {
    const existing = cart.find((item) => item.product.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `✅ Order placed!\n\nName: ${customer.name}\nPhone: ${customer.phone}\nItems:\n${cart
        .map((item) => `${item.product.name} x${item.quantity}`)
        .join("\n")}`
    );
    setCart([]);
    setCustomer({ name: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-10">
        Order Online
      </h1>

      {/* Products Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-md p-4 text-center"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-32 h-32 object-contain mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-green-700 font-bold mb-3">₦{p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Order Form */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Your Order
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">No items in cart yet.</p>
        ) : (
          <ul className="mb-6 space-y-2">
            {cart.map((item) => (
              <li key={item.product.id} className="flex justify-between">
                <span>
                  {item.product.name} x {item.quantity}
                </span>
                <span className="font-semibold">
                  ₦{item.product.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="+234..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-800 transition"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}
