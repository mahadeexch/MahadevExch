import React from 'react';
import { Link } from 'react-router-dom';

import andarbahar from '../assets/andarbahar.jpeg';
import boardgame from '../assets/boardgame.jpeg';
import casino from '../assets/casino.jpeg';
import cricket from '../assets/cricket.jpeg';
import dice from '../assets/dice.jpeg';
import soccer from '../assets/soccer.jpeg';
import teenpatti from '../assets/teenpatti.jpeg';
import tennis from '../assets/tennis.jpeg';

import aboutus from '../assets/aboutus.jpg';

export default function About() {
  const games = [
    { title: 'Board Games', desc: 'We have the best board games.', img: boardgame },
    { title: 'Andar Bahaar', desc: "Let's play AndarBahaar with us.", img: andarbahar },
    { title: 'Cricket', desc: 'Win big with us while Playing cricket.', img: cricket },
    { title: 'Casino', desc: 'Try your luck on live casinos with us.', img: casino },
    { title: 'Soccer', desc: 'Try your soccer luck with us while playing big.', img: soccer },
    { title: '7 Up & Down', desc: "Don't miss this opportunity to win big.", img: dice },
    { title: 'Teen Patti', desc: 'Enjoy playing Teen Patti With Us.', img: teenpatti },
    { title: 'Tennis', desc: 'Bet on Tennis games and win big.', img: tennis },
  ];

  return (
  <div>
      <section
        style={{
          backgroundImage: `url(${aboutus})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '50vh',
        }}
      >
      </section>

    <div className="bg-black text-white">
      {/* About Section */}
      <section className="pt-10 pb-24 px-6 min-h-screen max-w-6xl mx-auto space-y-20">
        <div>
          <h2 className="text-3xl font-extrabold flex items-center gap-3 text-indigo-400 mb-4">
            <span className="w-6 h-6 border-2 border-indigo-400 rounded-full"></span>
            World's No. 1 Book
          </h2>
          <p className="text-xl font-semibold text-yellow-400 mb-4">
            Where Betting Meets Integrity, Entertainment, and Innovation..
          </p>
          <p className="leading-relaxed text-gray-300 mb-4">
            At Rocky Book, we bring the thrill of legal betting right to your fingertips. We're your trusted partner in the exciting world of sports betting and gaming. With a commitment to integrity, transparency, and responsible gaming, we provide a safe and enjoyable betting experience for enthusiasts and novices alike.
          </p>
          <p className="leading-relaxed text-gray-300 mb-4">
            Our story began with a simple idea: to create a betting platform that truly puts the player first. We envisioned a place where enthusiasts could engage with their favorite sports and games in a responsible, secure, and entertaining environment.
          </p>
          <p className="leading-relaxed text-gray-300 mb-4">
            What sets us apart? It's our commitment to innovation, responsibility, and transparency. We're constantly exploring new technologies to enhance your betting experience. From our user-friendly interface to our cutting-edge mobile app, we're at the forefront of innovation. We take responsible gaming seriously, promoting healthy gaming habits and providing self-exclusion tools to ensure that your entertainment never crosses the line. Your trust is our priority, and we provide clear, real-time information on odds, results, and payouts, so you're always in the know.
          </p>
          <p className="leading-relaxed text-gray-300">
            Behind Rocky Book is a dedicated team of betting experts, developers, and customer support professionals who are passionate about what they do. We work tirelessly to provide you with the best possible experience.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-extrabold flex items-center gap-3 text-indigo-400 mb-4">
            <span className="w-6 h-6 border-2 border-indigo-400 rounded-full"></span>
            Our Mission
          </h2>
          <p className="text-xl font-semibold text-yellow-400 mb-4">Empowering Your Betting Passion</p>
          <p className="leading-relaxed text-gray-300 mb-4">
            Our mission is to elevate the sports betting experience by offering a wide range of betting options on your favorite sports, events, and games. We aim to provide unmatched customer service, cutting-edge technology, and a secure platform that ensures fairness and transparency in every wager.
          </p>
          <p className="leading-relaxed text-gray-300 mb-4">
            <strong className="text-white">To Elevate Betting:</strong> We're on a mission to elevate the betting experience. Whether you're a seasoned pro or new to betting, we want to make every wager an exciting and memorable event.
          </p>
          <p className="leading-relaxed text-gray-300 mb-4">
            <strong className="text-white">To Promote Responsible Gaming:</strong> Our commitment to responsible gaming is unwavering. We aim to create a safe and enjoyable environment where gaming remains a form of entertainment, not an obsession. We provide tools and resources to help you stay in control and ensure that betting is always a responsible and enjoyable pastime. Your well-being matters to us, and we're here to support you on your betting journey.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-extrabold flex items-center gap-3 text-indigo-400 mb-4">
            <span className="w-6 h-6 border-2 border-indigo-400 rounded-full"></span>
            Join Us
          </h2>
          <p className="text-xl font-semibold text-yellow-400 mb-4">Join the Rocky Book Community</p>
          <p className="leading-relaxed text-gray-300 mb-4">
            Join thousands of satisfied customers who trust Rocky Book for their betting needs. Sign up today to explore our offerings, claim exciting bonuses, and become part of the Rocky Book community.
          </p>
          <p className="leading-relaxed text-gray-300 mb-4">
            We promote responsible gaming practices and provide tools to help you stay in control of your betting habits.
          </p>
          <p className="leading-relaxed text-gray-300">
            From major sporting events to niche competitions, we offer a comprehensive selection of markets, so you can bet on your passion.
          </p>
        </div>
      </section>

      {/* Game Choices */}
      <section
        id="features"
        className="bg-slate-900 text-white py-20 px-6 max-w-6xl mx-auto text-center rounded-lg shadow-lg scroll-mt-24"
      >
        <h2 className="text-4xl font-extrabold mb-12 text-yellow-400">
          PLAY THE GAME OF YOUR CHOICE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {games.map(({ title, desc, img }) => (
            <div
              key={title}
              className="relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500 transition cursor-pointer transform hover:scale-105"
            >
              <span className="absolute top-3 left-3 bg-yellow-500 text-xs uppercase font-semibold px-2 py-1 rounded tracking-wide text-slate-900 shadow-md z-10">
                New
              </span>
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold mb-1 text-yellow-400">{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Footer */}
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
            <div className="flex flex-col space-y-2">
              <a
                href="https://t.me/+4auRnsqTk_U2YjRl"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500"
              >
                Telegram
              </a>
              <a
                href="https://www.facebook.com/rockybookindia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/rockybookindia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-8 text-center border-t border-gray-700 pt-4">
          <p>© 2025 Rocky Book. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  );
}
