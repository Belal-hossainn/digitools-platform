import { toast } from "react-toastify";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 relative w-[320px] shadow-sm">
      <span className={`absolute top-4 right-4 ${product.badge === 'Best Seller' ? 'bg-orange-100 text-orange-500' : product.badge === 'Popular' ? 'bg-blue-100 text-blue-500' : 'bg-green-100 text-green-500'} text-xs px-3 py-1 rounded-full font-medium`}>
        {product.badge}
      </span>
      <div className="w-14 h-14 shadow-2xl rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <img src={product.icon} alt="icon" className="w-7 h-7 mx-auto" />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {product.name}
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {product.description}
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        ${product.price}<span className="text-sm text-gray-500 font-medium">/{product.period}</span>
      </h3>

      <ul className="space-y-2 mb-6">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {f}
          </li>
        ))}

      </ul>

     <button 
        onClick={() => {
          addToCart(product);
          toast.success("Added to cart");
        }}
        className="w-full py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition  text-center cursor-pointer"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;