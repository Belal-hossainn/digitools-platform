
const Banner = () => {
  return (
    <div className="py-20 mx-auto bg-white container px-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <span className="bg-[#E1E7FF] text-[#4F39F6] px-4 py-2 rounded-full text-sm font-medium">
            New AI-Powered Tools Available
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-gray-500 mt-6">
            Access premium AI tools, design assets, templates, and productivity software. All in one place. Start your free trial and elevate your work today.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-4xl font-medium hover:from-purple-500 hover:to-blue-500 transition">
              Explore Products
            </button>
            <button className="border border-[#4F39F6] text-[#4F39F6] px-6 py-3 rounded-4xl font-medium hover:bg-[#4F39F6] hover:text-white transition">
              Watch Demo
            </button>
          </div>
        </div>
        <img src="/banner.png" className="w-full max-w-md rounded-xl" />
      </div>
    </div>
  );
};

export default Banner;