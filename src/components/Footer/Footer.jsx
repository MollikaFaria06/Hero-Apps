import React from 'react';
import { NavLink } from "react-router-dom";
import twitterImg from '/src/assets/twitter.png';
import facebookImg from '/src/assets/facebook.webp';
import linkedinImg from '/src/assets/linkedin.png';

const Footer = () => {
  return (
    <div className='mt-4 px-4 py-6'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
       
        <div className='flex gap-2 items-center'>
          <img className="w-8 h-8" src="/src/assets/logo.png" alt="Logo" />
          <NavLink to="/" className="text-xl font-semibold text-purple-500">
            HERO.IO
          </NavLink>
        </div>

        
        <div className='flex flex-col items-end'>
          <h4 className='font-semibold'>Social Links</h4>
          <div className='flex gap-2 mt-1'>
            <img className="w-6 h-6 rounded-full" src={linkedinImg} alt="LinkedIn" />
            <img className="w-6 h-6 rounded-full" src={facebookImg} alt="Facebook" />
            <img className="w-6 h-6 rounded-full" src={twitterImg} alt="Twitter" /> 
          </div>
        </div>
      </div>

    
      <div className='max-w-7xl mx-auto mt-4 border-t border-gray-300 pt-2 text-center'>
        <h3>Copyright © 2025 - All rights reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
