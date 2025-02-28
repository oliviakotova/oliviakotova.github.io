import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-70 z-50">
      <div className="w-16 h-16 border-8 border-t-8 border-blue-400 border-solid rounded-full animate-spin-slow shadow-lg shadow-blue-500/50 inset-1"></div>
    </div>
  );
};

export default LoadingSpinner;
