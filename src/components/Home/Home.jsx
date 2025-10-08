import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import downloadImg from '/src/assets/icon-downloads.png'

const Home = () => {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/apps_data.json")
      .then(res => res.json())
      .then(data => setApps(data.slice(0, 8)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-amber-50 p-6 text-black text-center">
      <h1 className="text-3xl font-bold mb-4">Trending Apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {apps.map(app => (
          <div
            key={app.id}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition"
            onClick={() => navigate(`/app/${app.id}`)}
          >
            <img src={app.image} alt={app.title} className="w-full h-32 object-contain mb-2" />
            <h2 className="font-semibold">{app.title}</h2>
            <div className="flex justify-between mt-1">
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                <img src={downloadImg} className="w-4 h-4" />
                <span className="text-green-500 text-sm">{app.downloads.toLocaleString()}</span>
              </div>
              <div className="bg-orange-100 text-yellow-500 text-sm p-1 rounded-lg">
                ⭐ {app.ratingAvg}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
        onClick={() => navigate("/apps")}
      >
        Show All
      </button>
    </div>
  )
}

export default Home;
