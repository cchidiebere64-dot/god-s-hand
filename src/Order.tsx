import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Paracetamol", price: 500, image: "/paracetamol.jpg" },
  { id: 2, name: "Amoxicillin", price: 1500, image: "/amoxicillin.jpg" },
  { id: 3, name: "Vitamin C", price: 800, image: "/vitaminc.jpg" },
];

export default function Order() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [customer, setCustomer] = useState({ name: "", phone: "" });

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === Number(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  const handleSendOrder = () => {
    if (!customer.name || !customer.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    if (Object.keys(cart).length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Build WhatsApp message
    let message = `🛒 *New Order*%0A`;
    message += `👤 Name: ${customer.name}%0A📞 Phone: ${customer.phone}%0A%0A`;
    message += `Items:%0A`;

    Object.entries(cart).forEach(([id, qty]) => {
      const product = products.find((p) => p.id === Number(id));
      if (product) {
        message += `- ${product.name} x ${qty} = ₦${product.price * qty}%0A`;
      }
    });

    message += `%0A💰 *Total*: ₦${totalPrice}`;

    const whatsappURL = `https://wa.me/2348021354478?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Order Medicines Online
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Browse products, add to cart, and place your order.
        </p>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-green-700">{product.name}</h3>
              <p className="text-gray-600 mb-3">₦{product.price}</p>
              <button
                onClick={() => addToCart(product.id)}
                className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Checkout Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Checkout</h2>

          {Object.keys(cart).length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <ul className="mb-6">
              {Object.entries(cart).map(([id, qty]) => {
                const product = products.find((p) => p.id === Number(id));
                return (
                  <li key={id} className="flex justify-between text-gray-700 mb-2">
                    <span>
                      {product?.name} x {qty}
                    </span>
                    <span>₦{product ? product.price * qty : 0}</span>
                  </li>
                );
              })}
              <li className="flex justify-between font-bold text-green-700 border-t pt-2">
                <span>Total</span>
                <span>₦{totalPrice}</span>
              </li>
            </ul>
          )}

          {/* Customer Info */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            onClick={handleSendOrder}
            className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition"
          >
            Send Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
