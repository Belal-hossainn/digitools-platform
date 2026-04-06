import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Toggle from "./components/Toggle";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Package from "./components/Package";
import Products from "./components/Products";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CTA from "./components/CTA";

const fetchProducts = async () => {
  const res = await fetch("/product.json");
  return res.json();
}

const fetchPackages = async () => {
  const res = await fetch("/package.json");
  return res.json();
}

const fetchSteps = async () => {
  const res = await fetch("/getStarted.json");
  return res.json();
}
const productsPromise = fetchProducts();
  const packagesPromise = fetchPackages();
  const stepsPromise = fetchSteps();
function App() {
  
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
       <>
      <Navbar cart={cart} />
      <Banner />
      <Stats />

      <Toggle view={view} setView={setView} cartCount={cart.length} />

      {view === "products" ? (
        <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
          <Products productsPromise={productsPromise} addToCart={addToCart} />
        </Suspense>
      ) : (
        <Cart cart={cart} removeItem={removeItem} clearCart={clearCart}  />
      )}

      <Steps stepsPromise={stepsPromise} />
      <Package packagesPromise={packagesPromise} />
      <CTA />
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;