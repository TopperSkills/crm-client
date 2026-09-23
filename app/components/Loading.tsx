const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F4F8F7] flex items-center justify-center">
      <div className="flex flex-col items-center">

        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#B2DFDB] border-t-[#263238] rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="mt-4 text-[#263238] font-semibold">
          Loading...
        </p>

      </div>
    </div>
  );
};

export default Loading;