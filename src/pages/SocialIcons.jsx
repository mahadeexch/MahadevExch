import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-4 text-white text-3xl z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918989831318"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-500 transition-colors"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/yourtelegramusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
        aria-label="Telegram"
      >
        <FaTelegramPlane />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourinstagramhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
