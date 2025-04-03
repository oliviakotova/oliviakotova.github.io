const Spinner = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-gray-900">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-300 border-t-blue-500 dark:border-gray-600"></div>
    </div>
  );
};

export default Spinner;
