import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import downloadImg from '/src/assets/icon-downloads.png';
import Loader from "../Loader/Loader"; 

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("/apps_data.json") 
      .then((res) => res.json())
      .then((data) => {
        setApps(data.slice(0, 8)); 
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Failed to load apps:", err);
        setLoading(false);
      });
  }, []);

  const handleNavigate = (id) => {
    setLoading(true); 
    setTimeout(() => {
      navigate(`/apps/${id}`);
      setLoading(false);
    }, 300); 
  };

  const handleShowAll = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/apps");
      setLoading(false);
    }, 300);
  };

  if (loading) return <Loader />; 

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
            onClick={() => handleNavigate(app.id)} 
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-32 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{app.title}</h2>
            <div className="flex justify-between">
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg mt-1">
                <img className="w-4 h-4" src={downloadImg} alt="downloads" />
                <span className="text-sm text-green-500 font-semibold">
                  {app.downloads.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-yellow-500 font-medium bg-orange-100 p-1 rounded-lg mt-1">
                ⭐ {app.ratingAvg}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-6 px-6 py-2 btn bg-gradient-to-b from-purple-900 to-purple-500 w-50 gap-2 text-white rounded-lg"
        onClick={handleShowAll}
      >
        Show All
      </button>
    </div>
  );
};

export default TrendingApps;
