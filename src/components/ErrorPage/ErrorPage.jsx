import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "/src/assets/error-404.png";


const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-200 text-center">
      <img className="w-100 h-100" src={errorImg} alt="" />
      <p className="text-2xl mt-4 font-bold text-gray-700 mb-2">Oops, Page Not Found!</p>
      <h4 className="text-sm text-gray-700  ">The page you are looking for is not available.</h4>
      <button
        onClick={() => navigate("/")}
        className="px-6 mt-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
       Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;
