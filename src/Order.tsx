
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Order() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
        >
          <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-green-700 font-bold mb-4">₦{product.price}</p>
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
        </div>
      ))}
    </div>
  );
}
