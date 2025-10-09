import React from 'react';
import playStoreLogo from '/src/assets/play_store.png'; 
import appStoreLogo from '/src/assets/app_store.png'; 
import heroImage from '/src/assets/hero.png'; 

const Banner = () => {
  return (
    <section className="bg-purple-200 text-black py-0 pt-20">
      <div className="container mx-auto text-center px-4">
       
        <h1 className="text-5xl md:text-5xl font-bold mb-6">
          We Build <br />
          <strong className="text-purple-600">Productive</strong> Apps
        </h1>

      
        <p className="text-sm md:text-lg mb-8 max-w-2xl text-gray-700 mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

       
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-400 transition"
          >
            <img
              src={playStoreLogo}
              alt="Google Play"
              className="w-6 h-6"
            />
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-400 transition"
          >
            <img
              src={appStoreLogo}
              alt="App Store"
              className="w-6 h-6"
            />
            App Store
          </a>
        </div>

        
        <img
          src={heroImage}
          alt="Hero"
          className="mx-auto max-w-full h-auto "
        />
      </div>
    </section>
  );
};

export default Banner;
