{/*import { useState } from "react";
import { db, storage, auth } from "./firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { signOut } from "firebase/auth";

export default function AdminDashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleAddProduct = async () => {
    if (!file) return alert("Please select an image!");

    const storageRef = ref(storage, `products/${file.name}`);
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);

    await addDoc(collection(db, "products"), {
      name,
      price,
      image: imageUrl,
    });

    alert("Product added successfully!");
    setName("");
    setPrice("");
    setFile(null);
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/admin"; // redirect to login
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      {/* Top Bar */}
{/*  <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Add Product Form */}
{/*   <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Price (₦)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        className="w-full mb-3"
      />
      <button
        onClick={handleAddProduct}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Product
      </button>
    </div>
  );
}*/}



