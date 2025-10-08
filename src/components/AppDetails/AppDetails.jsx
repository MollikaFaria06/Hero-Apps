import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import downloadImg from "/src/assets/icon-downloads.png";
import ratingImg from "/src/assets/icon-ratings.png";
import reviewsImg from "/src/assets/icon-review.png";
import Loader from "../Loader/Loader";
import warningImg from "/src/assets/warning.jpg";

const parseCount = (countStr) => {
  if (typeof countStr !== "string") return countStr;
  if (countStr.endsWith("M")) return parseFloat(countStr) * 1_000_000;
  if (countStr.endsWith("K")) return parseFloat(countStr) * 1_000;
  return parseInt(countStr);
};

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    fetch("/apps_data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch JSON");
        return res.json();
      })
      .then((data) => {
        const foundApp = data.find((a) => a.id.toString() === id);
        setApp(foundApp || null);
        setLoading(false);

        // Check if app is already installed in localStorage
        if (foundApp) {
          const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
          const isInstalled = installedApps.some(a => a.id === foundApp.id);
          setInstalled(isInstalled);
        }
      })
      .catch((err) => {
        console.error("Error loading app:", err);
        setLoading(false);
      });
  }, [id]);

  const handleInstall = () => {
    if (!app) return;

    // Save app to localStorage
    const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (!installedApps.some(a => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);

      toast.success(`${app.title} Installed Successfully!`, {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });
    }
  };

  if (loading) return <Loader />;

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center bg-amber-50 min-h-screen text-center text-gray-700">
        <img src={warningImg} alt="" />
        <h1 className="text-3xl font-bold text-black mt-4 mb-2">
          App Is Not Found!
        </h1>
        <p className="mb-6 text-black">
          The app you’re looking for doesn’t exist or may have been removed.
        </p>
        <button
          onClick={() => navigate("/apps")}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Back to All Apps
        </button>
      </div>
    );
  }

  const chartData = [...app.ratings]
    .reverse()
    .map((r) => ({ star: r.name, reviews: parseCount(r.count) }));

  const barColors = ["#F59E0B", "#F59E0B", "#F59E0B", "#F59E0B", "#F59E0B"];

  return (
    <div className="min-h-screen p-6 bg-amber-50 text-black">
      <ToastContainer />

      <div className="border-b border-gray-300 p-4 flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src={app.image}
          alt={app.title}
          className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg shadow-md"
        />
        <div className="flex-1">
          <div className="border-b border-gray-300 pb-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-1">{app.title}</h1>
            <p className="text-gray-600 mb-4">
              Developed by{" "}
              <strong className="text-purple-700">{app.companyName}</strong>
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mt-2 mb-4">
            <div className="flex flex-col items-center">
              <img className="w-6 h-6 mb-1" src={downloadImg} alt="downloads" />
              <p className="font-semibold text-gray-700">Downloads</p>
              <p className="font-bold text-2xl">{app.downloads}</p>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-6 h-6 mb-1" src={ratingImg} alt="ratings" />
              <p className="font-semibold text-gray-700">Average Rating</p>
              <p className="font-bold text-2xl">{app.ratingAvg}</p>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-6 h-6 mb-1" src={reviewsImg} alt="reviews" />
              <p className="font-semibold text-gray-700">Total Reviews</p>
              <p className="font-bold text-2xl">{app.reviews}</p>
            </div>
          </div>

          <button
            disabled={installed}
            onClick={handleInstall}
            className={`px-6 py-2 rounded-lg text-white font-semibold transition duration-200 ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-10 py-6 border-b border-gray-300">
        <h2 className="text-2xl font-bold mb-2">Ratings</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="star" type="category" />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="reviews">
              {chartData.map((_, i) => (
                <Cell key={i} fill={barColors[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
