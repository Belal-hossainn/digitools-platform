const Navbar = ({cart}) => {
  return (
    <div className="py-3 mx-auto border-b border-b-gray-200 container">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide 
bg-gradient-to-r from-indigo-500 to-purple-500  
bg-clip-text text-transparent">DigiTools</h1>

        <div className="hidden md:flex gap-8 text-gray-600">
          <a href="/products">Products</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="flex gap-4">
          <div className="relative mt-2">
            <img className="w-7 h-7" src="https://i.ibb.co.com/zHLZKm71/shoping-cart.png" alt="Cart" />
         {cart.length > 0 && (
             <span className="absolute -top-2 -right-2  text-xs text-blue-500 px-2 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 ">
            {cart.length}
          </span>
          )}
          </div>
          <div className="hidden md:flex gap-4">
            <button >Login</button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 text-white px-4 py-2 mx-2 rounded-4xl">
            Get Started
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;