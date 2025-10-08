import React from 'react';
import { NavLink } from "react-router-dom";
import twitterImg from '/src/assets/twitter.png';
import facebookImg from '/src/assets/facebook.webp';
import linkedinImg from '/src/assets/linkedin.png';
import logoImg from '/src/assets/logo.png';

const Footer = () => {
  return (
    <footer className=" text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">

      
        <div>
          <div className='flex gap-1'>
            <img src={logoImg} className="w-8 h-8 mb-2" alt="Logo" />
          <h2 className="text-xl font-bold">HERO.IO</h2>
          </div>
          <p className="text-gray-200 mt-2 text-sm">
            HERO.IO brings you trending apps with best-in-class features. Discover, install, and enjoy!
          </p>
        </div>

       
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-200 text-sm">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/apps">Apps</NavLink></li>
            <li><NavLink to="/installation">Installation</NavLink></li>
            <li><NavLink to="/apps/1">App Details</NavLink></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-gray-200 text-sm">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2">Follow & Subscribe</h3>
          <div className="flex gap-3 mb-4">
            <img className="w-6 h-6 rounded-full hover:scale-110 transition" src={linkedinImg} alt="LinkedIn" />
            <img className="w-6 h-6 rounded-full hover:scale-110 transition" src={facebookImg} alt="Facebook" />
            <img className="w-6 h-6 rounded-full hover:scale-110 transition" src={twitterImg} alt="Twitter" />
          </div>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 border-2 border-white rounded-l-lg  text-white focus:outline-none w-full"
            />
            <button className="bg-white text-purple-600  px-3 py-2 rounded-r-lg hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-gray-200 text-sm border-t border-gray-300 pt-4 px-4">
        Copyright © 2025 HERO.IO - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
