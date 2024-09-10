import { useState, useEffect, useContext } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../context/Cartcontext";
import { Link } from "react-router-dom";
import Homepage from "./Homepage";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Footer from "./Footer";

function AllCard({ searchItem, cartItemsCount, products }) {
  const { addToCart, addToWishlist } = useContext(CartContext);

  const [filteredItems, setFilteredItems] = useState([]);
  const [likeProduct, setLikeProducts] = useState([]);

  const notify = () =>
    toast.success("Added to Cart!", {
      theme: "dark",
    });
  const notifyWishlist = () =>
    toast.info("Added to wishlist!", {
      theme: "dark",
    });

  const handleWishlistToggle = (product) => {
    if (likeProduct.includes(product.id)) {
      setLikeProducts(likeProduct.filter((id) => id !== product.id));
    } else {
      setLikeProducts([...likeProduct, product.id]);
      addToWishlist(product);
    }
  };

  useEffect(() => {
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchItem, products]);

  return (
    <div>
      <div className="flex flex-col justify-center bg-gray-100">
        <Homepage />
        <div className="flex justify-between items-center px-20 py-5">
          <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
            Trending Products
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
          {filteredItems.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg px-10 py-10"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.images}
                  alt={product.title}
                  className="rounded-md h-48 object-cover"
                />
              </Link>
              <div className="mt-4">
                <h1 className="text-lg uppercase font-bold">{product.title}</h1>
                <p className="mt-2 text-gray-600 text-sm">
                  {product.description.slice(0, 40)}...
                </p>
                <p className="mt-2 text-gray-600">
                  ₹ {(product.price * 80).toFixed(0)}
                </p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => {
                    notify();
                    addToCart(product);
                    cartItemsCount();
                  }}
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                >
                  Add to cart
                </button>
                <Link to="/cart"></Link>
                <span
                  onClick={() => {
                    handleWishlistToggle(product);
                  }}
                >
                  {likeProduct.includes(product.id) ? (
                    <FaHeart size={"35px"} color="red" />
                  ) : (
                    <CiHeart size={"35px"} onClick={notifyWishlist} />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          transition={Zoom}
        />
      </div>
      <Footer />
    </div>
  );
}

export default AllCard;
