import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-70">
      <div className="animate-spin-slow inset-1 h-16 w-16 rounded-full border-8 border-t-8 border-solid border-blue-400 shadow-lg shadow-blue-500/50"></div>
    </div>
  );
};

export default LoadingSpinner;
