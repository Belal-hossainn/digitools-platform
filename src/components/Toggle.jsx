
const Toggle = ({ view, setView, cartCount }) => {
  return ( 
    <div> 
      <div className="text-center max-w-2xl mx-auto px-6 mt-6">
        <h1 className="text-2xl md:text-3xl font-medium py-2">Preimum Digital Tools</h1>
        <p className="text-gray-500 text-xs md:text-sm">
          Choose from our curated collection of premium digital products <br /> designed   to boost your productivity.
        </p>
      </div>
      <div className="flex justify-center my-6">
      <button
        onClick={() => setView("products")}
        className={`px-6 py-2  font-medium transition cursor-pointer
        ${view === "products"
          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-purple-500 hover:to-blue-500"
          : " text-blue-500 rounded-l-full rounded-r-none border-none shadow-2xl "} transition`}
      >
        Products
      </button>

      <button
        onClick={() => setView("cart")}
        className={` btn px-6 py-2  font-medium transition cursor-pointer
        ${view === "cart"
          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-purple-500 hover:to-blue-500 "
          : " text-blue-500 rounded-r-full rounded-l-none border-none shadow-2xl"}`}
      >
        Cart {cartCount > 0 && <span className="ml-2 bg-blue-200 text-blue-500 text-xs px-2 py-1 rounded-full">{cartCount}</span>}
      </button>
    </div>
    </div>
  );
};

export default Toggle;