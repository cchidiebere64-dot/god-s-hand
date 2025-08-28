import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function App() {
  const navigate = useNavigate();

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-blue-700 text-white py-20 text-center overflow-hidden">
        <img
          src="/logo.png"
          alt="Watermark Logo"
          className="absolute inset-0 m-auto opacity-10 w-2/3 md:w-1/3"
        />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD
        </motion.h1>

        <p className="relative text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Your trusted partner in health and wellness across Nigeria. 
          We deliver quality medicines, reliable healthcare products, and 
          professional guidance to keep your family healthy.
        </p>

        <div className="relative flex justify-center gap-4">
          <button
            onClick={() => navigate("/order")}
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
          >
            Order Online
          </button>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/2348021354478?text=Hello!%20I%20would%20like%20to%20make%20an%20inquiry.",
                "_blank"
              )
            }
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-300 transition"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-green-700">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD, we are dedicated to 
          improving the health and well-being of every individual we serve. 
          With years of experience in the healthcare industry, we ensure access 
          to affordable, high-quality medicines and personalized healthcare 
          services. Our commitment is built on trust, care, and excellence.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 p-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="shadow-md rounded-2xl p-6 text-center bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Prescription Refills
            </h3>
            <p className="text-gray-600">
              Convenient and fast prescription refill services to ensure you 
              never run out of essential medications.
            </p>
          </div>

          <div className="shadow-md rounded-2xl p-6 text-center bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Over-the-Counter Medications
            </h3>
            <p className="text-gray-600">
              From pain relievers to wellness supplements, we stock trusted 
              brands for your everyday healthcare needs.
            </p>
          </div>

          <div className="shadow-md rounded-2xl p-6 text-center bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Health Consultations
            </h3>
            <p className="text-gray-600">
              Speak directly with our qualified pharmacists for expert guidance 
              on safe medication use and healthy living.
            </p>
          </div>

          <div className="shadow-md rounded-2xl p-6 text-center bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Laboratory Tests
            </h3>
            <p className="text-gray-600">
              We provide accurate and reliable blood tests and other essential 
              lab services to monitor and maintain your health.
            </p>
          </div>

          <div className="shadow-md rounded-2xl p-6 text-center bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              Medical Scanning
            </h3>
            <p className="text-gray-600">
              Our diagnostic scanning services help detect health conditions early, 
              ensuring proper treatment and care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Contact Us</h2>
        <p className="text-sm mb-3">
          📞{" "}
          <a
            href="https://wa.me/2348021354478?text=Hello!%20I%20would%20like%20to%20make%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            +234-802-135-4478
          </a>
        </p>
        <p className="text-sm mb-3">
          📧{" "}
          <a
            href="mailto:info@godshandakpharma.com"
            className="hover:text-yellow-500"
          >
            info@godshandakpharma.com
          </a>
        </p>
        <p className="text-sm">
          📍{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=123+Sabon+Tasha,+Kaduna,+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            123 Sabon Tasha, Kaduna, Nigeria
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="relative bg-green-700 text-white px-6 py-10 overflow-hidden">
        <img
          src="/logo.png"
          alt="Background Logo"
          className="absolute opacity-10 w-64 h-64 -bottom-10 -right-10 pointer-events-none select-none"
        />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src="/logo.png" alt="Logo" className="w-14 h-14" />
            <h2 className="text-lg font-semibold">GOD'S HAND AK PHARMA</h2>
            <p className="text-sm text-gray-200">
              Your trusted partner in health and wellness.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-300">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-green-500 mt-8 pt-4 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
