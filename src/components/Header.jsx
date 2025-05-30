import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Logo.jpg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500">
            <img src={logo} alt="MahadevBook Logo" className="object-cover w-full h-full" />
          </div>
          <span className="font-bold text-2xl tracking-widest text-indigo-400">MahadevBook</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {['/', '/about', '/contact'].map((path, index) => {
            const label = ['Home', 'About', 'Contact'][index];
            return (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  isActive ? 'text-yellow-400 font-semibold' : 'hover:text-yellow-400 transition'
                }
              >
                {label}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-900 text-center py-4 space-y-4">
          {['/', '/about', '/contact'].map((path, index) => {
            const label = ['Home', 'About', 'Contact'][index];
            return (
              <NavLink
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block text-white hover:text-yellow-400 transition"
              >
                {label}
              </NavLink>
            );
          })}
        </nav>
      )}
    </header>
  );
}
