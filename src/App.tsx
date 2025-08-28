{/*import { motion } from "framer-motion";
// import { Phone, MapPin, Mail } from "lucide-react";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}

      {/* Hero Section */}
{/* <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white p-12 text-center overflow-hidden">
        {/* Background Watermark Logo */}
{/*    <img
          src="/logo.png"
          alt="Watermark Logo"
          className="absolute inset-0 m-auto opacity-10 w-2/3 md:w-1/3"
        />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-4xl md:text-6xl font-bold mb-4"
        >
          GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD
        </motion.h1>
        <p className="relative text-lg md:text-xl mb-6">
          Your trusted partner in health and wellness
        </p>
        <div className="relative flex justify-center gap-4">
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100">
            Order Online
          </button>
          <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-yellow-300">
            Contact Us
          </button>
        </div>
      </section>

      {/* About Us */}
{/* <section id="about" className="p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-relaxed">
          At GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD, we are dedicated to
          providing high-quality pharmaceutical products and exceptional
          healthcare services. Our mission is to ensure that every client
          receives the best support for their health and wellness needs.
        </p>
      </section>

      {/* Services */}
{/* <section id="services" className="bg-gray-100 p-12">
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
      </section> {/* ✅ Fixed closing tag */}

        {/* Contact Section */}
      {/*<section id="contact" className="p-12 text-center max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
  <div className="flex flex-col gap-4 items-center">
    <div className="flex items-center gap-2">
      <Phone className="text-green-600" /> <span>+234-8021354478</span>
    </div>
    <div className="flex items-center gap-2">
      <Mail className="text-green-600" />{" "}
      <span>info@ChidieberePOSMan.com</span>
    </div>
    <div className="flex items-center gap-2">
      <MapPin className="text-green-600" />{" "}
      <span>123 Sabon Tasha, Kaduna, Nigeria</span>
    </div>
  </div>
</section>*/}


      
      {/* Footer */}
{/*  <footer className="relative bg-green-700 text-white px-6 py-10 overflow-hidden">
        {/* Background Logo */}
{/*   <img
          src="/logo.png"
          alt="Background Logo"
          className="absolute opacity-10 w-64 h-64 -bottom-10 -right-10 pointer-events-none select-none"
        />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Brand */}
{/* <div className="flex flex-col items-center md:items-start gap-3">
            <img src="/logo.png" alt="Logo" className="w-14 h-14" />
            <h2 className="text-lg font-semibold">GOD'S HAND AK PHARMA</h2>
            <p className="text-sm text-gray-200">
              Your trusted partner in health and wellness.
            </p>
          </div>

          {/* Quick Links */}
{/*   <div>
            <h3 className="text-md font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-300">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
{/* <div>
            <h3 className="text-md font-semibold mb-3">Contact</h3>
            <p className="text-sm">📞 +234-8021354478</p>
            <p className="text-sm">📧 info@ChidieberePOSMan.com</p>
            <p className="text-sm">📍 123 Sabon Tasha, Kaduna, Nigeria</p>
          </div>
        </div>

        {/* Bottom Line */}
{/*  <div className="relative border-t border-green-500 mt-8 pt-4 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} GOD'S HAND AK PHARMACEUTICAL SUPPLIES LTD. All rights reserved.
        </div>
      </footer>
    </div>
  );
}






// src/App.tsx
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { Phone, MapPin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero */}
      <section
        id="main"
        className="relative isolate overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 text-white"
      >
        {/* Watermark logo */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 m-auto w-[70vw] max-w-[540px] opacity-10"
        />

        <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            GOD&apos;S HAND AK PHARMACEUTICAL SUPPLIES LTD
          </motion.h1>
          <p className="text-lg md:text-xl/8 text-white/90 mb-8">
            Your trusted partner in health and wellness.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#order"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-green-700 hover:bg-gray-100"
            >
              Order Online
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-gray-900 hover:bg-yellow-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-4xl px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-lg leading-8 text-gray-700 text-center">
          At GOD&apos;S HAND AK PHARMACEUTICAL SUPPLIES LTD, we are dedicated to
          providing high-quality pharmaceutical products and exceptional healthcare
          services. Our mission is to ensure every client receives the best support
          for their health and wellness needs.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "Prescription Refills", desc: "Fast, accurate refills with patient counseling." },
              { title: "OTC Medications", desc: "Quality over-the-counter drugs & essentials." },
              { title: "Health Consultations", desc: "Guidance on medications, dosage, and safety." },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-green-700">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order anchor (for the button) */}
      <section id="order" className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="rounded-2xl bg-green-50 p-6 border border-green-100 text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Place an Order</h3>
          <p className="text-gray-700 mb-4">
            Coming soon — online ordering and delivery. For now, reach us via phone or email.
          </p>
          <a href="#contact" className="inline-block rounded-xl bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800">
            Get in touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-green-700 text-white">
        {/* Background watermark */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-10 -bottom-10 h-64 w-64 opacity-10"
        />

        <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-12 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src="/logo.png" alt="Logo" className="h-14 w-14" />
            <h2 className="text-lg font-semibold">GOD&apos;S HAND AK PHARMA</h2>
            <p className="text-sm text-green-100">
              Your trusted partner in health and wellness.
            </p>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h3 className="text-md font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-yellow-300" href="#about">About Us</a></li>
              <li><a className="hover:text-yellow-300" href="#services">Services</a></li>
              <li><a className="hover:text-yellow-300" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact" className="text-center md:text-left">
            <h3 className="text-md font-semibold mb-3">Contact</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
              <Phone className="h-4 w-4" /> <span>+234-8021354478</span>
            </div>
            <div className="mt-2 flex items-center justify-center md:justify-start gap-2 text-sm">
              <Mail className="h-4 w-4" /> <span>info@godshandakpharma.com</span>
            </div>
            <div className="mt-2 flex items-center justify-center md:justify-start gap-2 text-sm">
              <MapPin className="h-4 w-4" /> <span>Sabon Tasha, Kaduna, Nigeria</span>
            </div>
          </div>
        </div>

        <div className="relative border-t border-green-600/60">
          <p className="mx-auto max-w-6xl px-4 md:px-6 py-4 text-center text-sm text-green-100">
            © {new Date().getFullYear()} GOD&apos;S HAND AK PHARMACEUTICAL SUPPLIES LTD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}



  
