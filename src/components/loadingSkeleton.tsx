const LoadingSkeleton = () => {
  return (
    <div>
      <div className="animate-pulse space-y-4 mb-8">
        <div className="h-15 bg-gray-700 rounded-lg w-3/4 mx-auto"></div>
        {/*location*/}
        <div className="h-12 bg-gray-700 rounded-lg w-1/2 mx-auto"></div>
        {/*icon*/}
        <div className="h-10 bg-gray-700 rounded-lg w-1/2 mx-auto"></div>
        {/*temperature*/}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((day) => (
          <div
            key={day}
            className="h-18 bg-gray-700 rounded-lg w-3/4 mx-auto"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
