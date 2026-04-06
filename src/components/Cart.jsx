import { toast } from "react-toastify";

const Cart = ({ cart, removeItem, clearCart }) => {
   const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="p-6 text-amber-600">
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <div className="border rounded-2xl p-6 bg-white shadow-sm">

        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
        <div className="space-y-4">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-50 rounded-xl px-5 py-4"
            >
              <div className="flex items-center gap-4">
                
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                  <img src={item.icon} alt={item.name} className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    ${item.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-pink-500 font-medium hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8">
          <p className="text-gray-500">Total:</p>
          <h3 className="text-xl font-semibold">${total}</h3>
        </div>
        <button onClick={() => {
              clearCart();
              toast.info("Checkout complete");
            }}
         className="w-full mt-6 py-3 rounded-full text-white font-medium
        bg-gradient-to-r from-purple-600 to-indigo-600
        hover:from-indigo-600 hover:to-purple-600 transition">
          Proceed To Checkout
        </button>
      </div>
        </>
      )}
    </div>
  );
};

export default Cart;