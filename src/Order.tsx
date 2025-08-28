
import Navbar from "./Navbar";

export default function Order() {
  const products = [
    {
      id: 1,
      name: "Blood Pressure Monitor",
      price: "25,000",
      image: "/products/Blood-Pressure-Monitor.jpg",
    },
    {
      id: 2,
      name: "Vitamin C",
      price: "3,500",
      image: "/products/vitamin-c.jpg",
    },
    {
      id: 3,
      name: "Cough Syrup",
      price: "2,800",
      image: "/products/cough-syrup.jpg",
    },
  ];

  const handleOrder = (product: string) => {
    const phone = "2348021354478"; // your WhatsApp number
    const text = `Hello! I would like to order: ${product}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
          Order Online
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
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
              <p className="text-green-700 font-bold mb-4">
                ₦{product.price}
              </p>
              <button
                onClick={() => handleOrder(product.name)}
                className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700 transition"
              >
                Order via WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


