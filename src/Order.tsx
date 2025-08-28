import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Paracetamol Tablets",
    price: "₦1,200",
    image: "/products/paracetamol.jpg",
  },
  {
    id: 2,
    name: "Vitamin C (1000mg)",
    price: "₦3,500",
    image: "/products/vitamin-c.jpg",
  },
  {
    id: 3,
    name: "Blood Pressure Monitor",
    price: "₦18,000",
    image: "/products/bp-monitor.jpg",
  },
  {
    id: 4,
    name: "Cough Syrup",
    price: "₦2,800",
    image: "/products/cough-syrup.jpg",
  },
];

export default function Order() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-700 mb-4"
        >
          Order Online
        </motion.h1>
        <p className="text-gray-600 text-lg">
          Browse through our products and place your order easily via WhatsApp.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-green-700 font-bold mb-4">{product.price}</p>
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/2348021354478?text=Hello!%20I%20want%20to%20order%20${encodeURIComponent(
                    product.name
                  )}.`,
                  "_blank"
                )
              }
              className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700 transition"
            >
              Order via WhatsApp
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

