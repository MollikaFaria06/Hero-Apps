import React, { useEffect, useState } from "react";
import downloadImg from "/src/assets/icon-downloads.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); 

  
  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(apps);
  }, []);

  
  const handleUninstall = (id) => {
    const app = installedApps.find((app) => app.id === id); 
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    toast.success(`${app.title} uninstalled successfully!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  
  const parseDownloads = (value) => {
    if (!value) return 0;
    value = value.toString().toUpperCase().trim();
    if (value.endsWith("K")) return parseFloat(value) * 1_000;
    if (value.endsWith("M")) return parseFloat(value) * 1_000_000;
    if (value.endsWith("B")) return parseFloat(value) * 1_000_000_000;
    return parseFloat(value); 
  };

  
  const sortedApps = [...installedApps].sort((a, b) => {
    const downloadsA = parseDownloads(a.downloads);
    const downloadsB = parseDownloads(b.downloads);
    return sortOrder === "asc" ? downloadsA - downloadsB : downloadsB - downloadsA;
  });

  if (installedApps.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-gray-700 bg-amber-50">
        <ToastContainer />
        <h1 className="text-3xl font-bold mb-4">No Installed Apps</h1>
        <p className="text-lg text-gray-600">You haven't installed any apps yet.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10 bg-purple-200 text-black">
      <ToastContainer />

      
      <div className="flex flex-col items-center mb-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-10">Your Installed Apps</h1>
          <p className="text-gray-600 mt-2 mb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

       
        <div className="w-full flex justify-between items-center mt-4 max-w-7xl">
          <p className="font-bold text-xl text-black">({installedApps.length}) Apps Found</p>
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="asc">Sort by Size: Low to High</option>
            <option value="desc">Sort by Size: High to Low</option>
          </select>
        </div>
      </div>

     
      <div className="space-y-4 max-w-7xl mx-auto">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white flex items-center justify-between p-4 rounded-lg shadow hover:shadow-md transition"
          >
            
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 object-contain rounded"
              />
              <div>
                <h2 className="text-xl font-semibold">{app.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-1">
                    <img className="w-4 h-4" src={downloadImg} alt="downloads" />
                    <span className="font-semibold">{app.downloads}</span>
                  </div>
                  <span className="font-semibold">⭐ {app.ratingAvg}</span>
                  <span className="font-semibold">{app.size} MB</span>
                </div>
              </div>
            </div>

           
            <button
              onClick={() => handleUninstall(app.id)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
