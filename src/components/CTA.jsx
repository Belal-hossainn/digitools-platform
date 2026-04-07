const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#9333EA] text-white py-20 text-center">

      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold">
          Ready To Transform Your Workflow?
        </h2>
        <p className="mt-4 text-gray-100 text-sm md:text-base">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-medium shadow">
            Explore Products
          </button>
          <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-purple-700 transition">
            View Pricing
          </button>
        </div>
        <p className="mt-4 text-xs text-gray-100">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default CTA;