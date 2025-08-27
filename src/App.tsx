import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import Navbar from "./Navbar"; // 👈 import it

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white p-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD
        </motion.h1>
        <p className="text-lg md:text-xl mb-6">
          Your trusted partner in health and wellness
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100">
            Order Online
          </button>
          <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-yellow-300">
            Contact Us
          </button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-relaxed">
          At GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD, we are dedicated to
          providing high-quality pharmaceutical products and exceptional
          healthcare services. Our mission is to ensure that every client
          receives the best support for their health and wellness needs.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-100 p-12">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Prescription Refills",
            "Over-the-Counter Medications",
            "Health Consultations",
          ].map((service, i) => (
            <div
              key={i}
              className="shadow-md rounded-2xl p-6 text-center bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, providing quality service for your
                needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex items-center gap-2">
            <Phone className="text-green-600" /> <span>+234-XXX-XXXXXXX</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-green-600" />{" "}
            <span>info@godshandakpharma.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-green-600" />{" "}
            <span>123 Main Street, Lagos, Nigeria</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center p-6 flex flex-col items-center gap-3">
        <img src="/logo.png" alt="Logo" className="w-14 h-14" />
        <p>
          © {new Date().getFullYear()} GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD.
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
