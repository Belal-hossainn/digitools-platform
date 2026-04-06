import { use } from "react";
const Package = ({ packagesPromise }) => {
  const packeges =use(packagesPromise);
  console.log(packeges);
  return (
    <div className="py-20 text-center mx-auto max-w-6xl px-6">
      <h2 className="text-3xl font-bold">Simple Transparent Pricinig</h2>
      <p>Chose the Plans that fits your needs, upgrade anytime.</p>

      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-7xl mx-auto px-6">

        {packeges.map((plan) => (
          <div className={`p-8 rounded-xl shadow flex flex-col relative justify-around text-left ${plan.most_popular === true ? " bg-gradient-to-r from-blue-500 to-purple-500 text-white " : " bg-gray-50"}`}>
            <span className={`absolute top-[-10px] left-1/2 transform -translate-x-1/2 text-xs px-3 py-1 rounded-full font-medium ${plan.most_popular === true ? 'bg-orange-100 text-orange-400' : 'hidden'} `}>
        Most Popular
      </span>
             <div>
                <h2 className="font-bold text-2xl">{plan.name}</h2>
            <p className={` ${plan.most_popular === true ? "text-white" : "text-gray-500"}`}>{plan.tagline}</p>
            <p className="text-xl">${plan.price}/<span className="text-xs text-gray-500">{plan.period}</span>
            </p>
             </div>
            <div > 
              <ul className="text-left mt-4 ">
              {plan.features.map((feature, i) => (
                <li key={i} className={`flex items-center gap-2 ${plan.most_popular === true ? "text-white" : "text-gray-700"}`}>
                  <span className={`${plan.most_popular === true ? "text-white" : "text-green-500"}`}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            </div>
            
            <div>
              <button className={`mt-6 px-4 py-2 rounded-4xl w-full ${plan.most_popular === true ? "bg-white text-blue-500" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"}`}>
              Choose Plan
            </button>
            </div>
          </div>
          
        ))}

      </div>
    </div>
  );
};

export default Package;