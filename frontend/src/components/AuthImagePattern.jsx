const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center bg-black p-12 min-h-screen">
      <div className="max-w-md text-center w-full">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-cyan-400/70 border border-cyan-600 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};


export default AuthImagePattern;
