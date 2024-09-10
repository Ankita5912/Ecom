import { useEffect, useState } from "react";
import Header from "./components/Header";
import { motion, useMotionValue, useSpring } from "framer-motion";
import AllCard from "./components/AllCard";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetail from "./components/ProductDetails";
function App() {
  const [searchItem, setSearchItem] = useState("");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);
  const [countCartItems, setCountCartItems] = useState(0);
  const cartItemsCount = () => {
    setCountCartItems(countCartItems + 1);
  };

  async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="App cursor-none bg-white">
        <motion.div
          className="cursor transform fixed left-0 top-0 w-[32px] h-[32px] rounded-full mix-blend-difference bg-white pointer-events-none cursor-none"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
        ></motion.div>
        <Header
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          counter={countCartItems}
        />
        <div className="cursor-pointer">
          <Routes>
            <Route
              path="/"
              element={
                <AllCard
                  products={products}
                  searchItem={searchItem}
                  cartItemsCount={cartItemsCount}
                />
              }
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route
              path="/products/:productId"
              element={<ProductDetail products={products} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
