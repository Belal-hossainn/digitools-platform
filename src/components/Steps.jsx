import { use } from "react";
const Steps = ({ stepsPromise }) => {
  const stepsData = use(stepsPromise);

  return (
    <div className="bg-[#F8FAFC] py-8">
      <div className="text-center container mx-auto px-6">
        <h2 className=" text-2xl md:text-4xl font-bold text-gray-900">
          Get Started In 3 Steps
        </h2>
        <p className="mt-2 text-gray-500 text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">

        {stepsData.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm hover:shadow-md transition"
          >

            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm flex items-center justify-center font-semibold">
              {item.id}
            </div>
        
            <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-3xl text-purple-600 mb-6">
              <img className="w-10 h-10" src={item.icon} alt={item.title} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Steps;