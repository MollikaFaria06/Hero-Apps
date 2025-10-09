import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import downloadImg from "/src/assets/icon-downloads.png";
import Loader from "../Loader/Loader";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

 
  useEffect(() => {
    fetch("/apps_data.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading apps:", err);
        setLoading(false);
      });
  }, []);

  
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const handleSearch = (e) => {
    setLoading(true); 
    setSearchTerm(e.target.value);

    
    setTimeout(() => {
      setLoading(false);
    }, 100); 
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-purple-200 min-h-screen px-6 py-10 text-black">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-black">Our All Applications</h1>
        <p className="text-lg text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <p className="text-gray-900 font-semibold text-xl">
          <span className="font-bold">({filteredApps.length}) Apps Found</span>
        </p>

        <div className="relative mt-3 md:mt-0 w-60 md:w-1/4">
          <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search apps..."
            className="pl-10 pr-4 py-2 w-full border border-gray-500 text-lg text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/apps/${app.id}`)}
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-32 object-contain mb-4"
              />
              <h2 className="text-lg text-center font-semibold">{app.title}</h2>
              <div className="flex justify-between">
                <div className="flex items-center gap-1 mt-1 bg-gray-100 p-1 rounded-lg">
                  <img className="w-4 h-4" src={downloadImg} alt="downloads" />
                  <span className="text-sm font-semibold text-green-500">{app.downloads}</span>
                </div>
                <p className="text-sm font-medium bg-orange-100 p-1 rounded-lg text-yellow-500 mt-1">
                  ⭐ {app.ratingAvg}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-4xl text-gray-700 font-semibold mt-10">
          No App Found
        </p>
      )}

      {searchTerm && (
        <div className="text-center">
          <button
            className="mt-6 w-52 px-6 py-2 btn bg-gradient-to-b from-purple-900 to-purple-500 text-white rounded-lg"
            onClick={() => setSearchTerm("")}
          >
            Show All Apps
          </button>
        </div>
      )}
    </div>
  );
};

export default Apps;
