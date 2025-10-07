import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import downloadImg from '/src/assets/icon-downloads.png'

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/apps_data.json") 
      .then((res) => res.json())
      .then((data) => setApps(data.slice(0, 8))) 
      .catch((err) => console.error("Failed to load apps:", err));
  }, []);

  return (
    <div className="bg-amber-50 text-black text-center py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
      <h6 className="text-lg font-normal mb-6">
        Explore All Trending Apps on the Market developed by us
      </h6>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition"
            onClick={() => navigate(`/app/${app.id}`)} 
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-32 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{app.title}</h2>
            <div className="flex justify-between ">
                <div className="flex items-center gap-1 mt-1">
                <img className="w-5 h-5" src={downloadImg} alt="downloads" />
                <span className="text-sm text-gray-600">{app.downloads.toLocaleString()}</span>
                </div>
                <p className="text-sm font-medium mt-1">⭐ {app.ratingAvg}</p>
                
            </div>
          </div>
        ))}
      </div>

      
      <button
        className="mt-6 px-6 py-2 btn bg-gradient-to-b from-purple-900 to-purple-500  gap-2 text-white"
        onClick={() => navigate("/all-apps")}
      >
        Show All
      </button>
    </div>
  );
};

export default TrendingApps;
