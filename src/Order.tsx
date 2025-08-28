// src/Order.tsx
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
}

const products: Product[] = [
  { id: 1, name: "Paracetamol", description: "Pain reliever and fever reducer", price: "₦500" },
  { id: 2, name: "Vitamin C", description: "Boosts immunity and overall health", price: "₦1,200" },
  { id: 3, name: "Antibiotics", description: "For bacterial infections", price: "₦3,500" },
  { id: 4, name: "Blood Pressure Medicine", description: "Helps control hypertension", price: "₦2,800" },
];

export default function Order() {
  const [selected, setSelected] = useState<Product[]>([]);

  const toggleProduct = (product: Product) => {
    if (selected.find((p) => p.id === product.id)) {
      setSelected(selected.filter((p) => p.id !== product.id));
    } else {
      setSelected([...selected, product]);
    }
  };

  const handleSubmit = () => {
    const message = `Hello, I would like to order:\n\n${selected
      .map((p) => `- ${p.name} (${p.price})`)
      .join("\n")}`;

    window.open(`https://wa.me/2348021354478?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        🛒 Order Online
      </h1>
      <p className="text-center mb-10 text-gray-600">
        Browse our products and click to add them to your order. When ready, send directly via WhatsApp.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`p-6 border rounded-2xl shadow-md cursor-pointer transition ${
              selected.find((p) => p.id === product.id)
                ? "border-green-600 bg-green-50"
                : "hover:shadow-lg"
            }`}
            onClick={() => toggleProduct(product)}
          >
            <h2 className="text-xl font-semibold text-green-700">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 font-bold">{product.price}</p>
          </div>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="mt-10 text-center">
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-green-700 transition"
          >
            ✅ Place Order via WhatsApp
          </button>
        </div>
      )}
    </div>
  );
}
