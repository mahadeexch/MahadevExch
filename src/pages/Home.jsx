import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg"; 
import andarbahar from "../assets/andarbahar.jpeg";
import boardgame from "../assets/boardgame.jpeg";
import casino from "../assets/casino.jpeg";
import cricket from "../assets/cricket.jpeg";
import dice from "../assets/dice.jpeg";
import soccer from "../assets/soccer.jpeg";
import teenpatti from "../assets/teenpatti.jpeg";
import tennis from "../assets/tennis.jpeg";

import mahadev from "../assets/mahadev.avif";
import playgame from "../assets/playgame.avif";
import pic1 from "../assets/pic1.avif";
import pic2 from "../assets/pic2.avif";

export default function Home() {
  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center py-28 px-6 text-center"
        style={{
          backgroundImage: `url(${mahadev})`,
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>

        <div className="relative z-10 bg-black bg-opacity-40 p-10 rounded-3xl max-w-3xl mx-auto flex flex-col items-center shadow-lg">
          <div className="w-32 h-32 rounded-full overflow-hidden border-8 border-indigo-400 shadow-xl mb-8">
            <img src={Logo} alt="Mahadev Book Logo" className="object-cover w-full h-full" />
          </div>
          <h1 className="text-6xl font-extrabold mb-6 text-white-400 drop-shadow-lg">
          Welcome to 
          </h1>
          
          <h1 className="text-6xl font-extrabold mb-6 text-indigo-400 drop-shadow-lg">
            Mahadev Book
          </h1>

          <p className="text-2xl mb-6 max-w-3xl mx-auto font-semibold text-white drop-shadow-md">
            THE MAHADEV GUARANTEE WITHDRAWAL IN 60 MINUTES - OR ELSE MONEY DOUBLE, Best Service
          </p>

          <p className="mb-8 max-w-3xl mx-auto text-lg text-indigo-300">
            Where Betting Meets Integrity, Entertainment, and Innovation.
          </p>

          <a
            href="#features"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Play the Game of Your Choice Section */}
<section
  id="features"
  className="relative bg-cover bg-center text-white py-10 px-6 scroll-mt-24"
  style={{
    backgroundImage: `url(${playgame})`,
  }}
>

  {/* Section Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-12 text-yellow-400">
      PLAY THE GAME OF YOUR CHOICE
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        {
          title: "Board games",
          desc: "We have the best board games.",
          img: boardgame    
        },
        {
          title: "Andar Bahaar",
          desc: "Let's play AndarBahaar with us",
          img: andarbahar,
        },
        {
          title: "Cricket",
          desc: "Win big with us while Playing cricket",
          img: cricket,
        },
        {
          title: "Casino",
          desc: "Try your luck on live casinos with us.",
          img: casino,
        },
        {
          title: "Soccer",
          desc: "Try your soccer luck with us while playing big.",
          img: soccer,
        },
        {
          title: "7 Up & Down",
          desc: "Don't miss this opportunity to win big.",
          img: dice,
        },
        {
          title: "Teen Patti",
          desc: "Enjoy playing Teen Patti With Us",
          img: teenpatti,
        },
        {
          title: "Tennis",
          desc: "Bet on Tennis games and win big",
          img: tennis,
        },
      ].map(({ title, desc, img }) => (
        <div
          key={title}
          className="relative bg-slate-800 bg-opacity-80 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500 transition cursor-pointer transform hover:scale-105 backdrop-blur-sm"
        >
          <span className="absolute top-3 left-3 bg-yellow-500 text-xs uppercase font-semibold px-2 py-1 rounded tracking-wide text-slate-900 shadow-md z-10">
            New
          </span>

          <img
            src={img}
            alt={title}
            className="w-full h-48 object-cover opacity-70"
          />
          <div className="p-4 text-left">
            <h3 className="text-lg font-semibold mb-1 text-yellow-400">{title}</h3>
            <p className="text-gray-300 text-sm">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Features Section */}
<section
  className="relative bg-cover bg-left py-20 px-6"
  style={{ backgroundImage: `url(${pic1})` }}
>
  {/* Dark overlay behind everything */}
  <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

  {/* Card Grid */}
  <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">

    {/* Card 1 */}
    <div
      className="flex flex-col items-center rounded-xl p-8 shadow-lg transition transform hover:scale-105 cursor-pointer"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 mb-4 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01" />
      </svg>
      <h3 className="text-xl font-bold mb-2 text-white">Instant Withdrawal & Deposit</h3>
      <p className="text-sm text-gray-300">
        Trustworthy and Speedy Withdrawals, Seamless Deposits
      </p>
    </div>

    {/* Card 2 */}
    <div
      className="flex flex-col items-center rounded-xl p-8 shadow-lg transition transform hover:scale-105 cursor-pointer"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 mb-4 text-blue-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9v2a3 3 0 11-6 0v-2" />
      </svg>
      <h3 className="text-xl font-bold mb-2 text-white">24 /7 Customer Service</h3>
      <p className="text-sm text-gray-300">
        Support Around the Clock, Always Ready. Click here and chat with us, We’re the best service Provider
      </p>
    </div>

    {/* Card 3 */}
    <div
      className="flex flex-col items-center rounded-xl p-8 shadow-lg transition transform hover:scale-105 cursor-pointer"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 mb-4 text-pink-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5l-4-4-4 4" />
      </svg>
      <h3 className="text-xl font-bold mb-2 text-white">Referral Bonus</h3>
      <p className="text-sm text-gray-300">
        Earn extra rewards by referring your friends.
      </p>
    </div>

  </div>
</section>


      {/* Blog Section */}
<section
  className="relative py-20 px-6"
  style={{ backgroundImage: `url(${pic2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  {/* Black transparent overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

  {/* Content container */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">
    <h2
      className="text-5xl font-extrabold mb-8 bg-clip-text text-transparent 
      bg-gradient-to-r from-yellow-400 via-white to-blue-400"
    >
      Latest Articles
    </h2>

    <p className="text-yellow-300 mb-12 max-w-3xl mx-auto text-lg">
      Stay updated with tips, strategies, and news to help you win big.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Cricket blog */}
      <article
        className="rounded-lg shadow-lg p-8 cursor-pointer transition-transform transform 
        hover:scale-105"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Link
          to="/cricket-betting-strategies"
          className="text-yellow-300 text-2xl font-semibold hover:underline"
        >
          Cricket Betting Strategies
        </Link>
        <p className="text-gray-200 mt-4 text-lg">
          Discover expert tips and tactics to maximize your success when betting on cricket matches.
        </p>
      </article>

      {/* Football blog */}
      <article
        className="rounded-lg shadow-lg p-8 cursor-pointer transition-transform transform 
        hover:scale-105"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Link
          to="/football-odds"
          className="text-blue-300 text-2xl font-semibold hover:underline"
        >
          Football Odds Explained
        </Link>
        <p className="text-gray-300 mt-4 text-lg">
          Learn how football odds work, how to interpret them, and ways to use this knowledge to your advantage in betting.
        </p>
      </article>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-sm py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-indigo-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">CONTACT INFO</h4>
            <p>Mahadev Book, India</p>
            <p>Phone: +91 12345 67890</p>
            <p>Email: info@mahadevbook.com</p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-white mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a
                href="https://t.me/+4auSsWPdiEoxMTk9"
                aria-label="Facebook"
                className="hover:text-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i> Telegram
              </a>
              <a
                href="https://instagram.com"
                aria-label="Twitter"
                className="hover:text-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i> Instagram
              </a>
              <a
                href="https://wa.me/918989831318"
                aria-label="Instagram"
                className="hover:text-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i> Whatsapp
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-gray-600">
          &copy; {new Date().getFullYear()} Mahadev Book. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
