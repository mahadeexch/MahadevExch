import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="pt-24 pb-24 bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-extrabold mb-8">Contact Us</h2>
      <div className="flex space-x-12 text-5xl">
        {/* WhatsApp */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-green-500 transition-colors"
        >
          <FaWhatsapp />
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/yourtelegramusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="hover:text-blue-400 transition-colors"
        >
          <FaTelegramPlane />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yourinstagramhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
