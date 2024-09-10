import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";

const Wishlist = () => {
  const { wishlistItems = [], removeFromWishlist } = useContext(CartContext);

  return (
    <div className="p-10 grid grid-cols-2">
      {wishlistItems.length === 0 ? (
        <p className="text-lg font-bold">Your wishlist is empty.</p>
      ) : (
        wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-8 bg-white shadow rounded mb-4"
          >
            <div>
              <img src={item.image} alt={item.title} className="w-20" />
              <h4 className="font-bold text-md w-[200px]">{item.title}</h4>
              <div className="flex items-start gap-1 flex-col">
                <p className="text-lg mt-1 text-gray-600">
                  Price: ₹ {(item.price * 80).toFixed(0)}
                </p>
              </div>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded">
              Buy Now
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded"
              onClick={() => removeFromWishlist(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
