import React from 'react';

const States = () => {
  

  return (
    <section className="py-20 mt-0 bg-gradient-to-b from-purple-700 to bg-purple-400">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Trusted by Millions, Built for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
           <div>
            <h4>Total Downloads</h4>
            <br />
            <h1 className='text-4xl font-extrabold'>29.6M</h1>
            <br />
            <h4>21% more than last month</h4>
           </div>
           <div>
            <h4>Total Reviews</h4>
            <br />
            <h1 className='text-4xl font-extrabold'>906K</h1>
            <br />
            <h4>46% more than last month</h4>
           </div>
           <div>
            <h4>Active Apps</h4>
            <br />
            <h1 className='text-4xl font-extrabold'>132+</h1>
            <br />
            <h4>31 more will Launch</h4>
           </div>
        </div>
      </div>
    </section>
  );
};

export default States;
