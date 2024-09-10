import { useContext } from "react";
import Cartitem from "./Cartitems";
import TotalBillSummary from "./TotalBillSummary";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/Cartcontext";

const Cart = () => {
  const { cartItems, removeFromCart, updateItemQuantity } =
    useContext(CartContext);

  const shippingCost = "Free";
  const taxRate = 0.1;

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * 1 * 80, 0);
  };

  return (
    <div className="w-[1280px] min-h-[400px] mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10 flex gap-[300px]">
      <div>
        <h2 className="text-2xl font-bold mb-6 flex justify-center gap-5 items-center">
          <FaShoppingCart /> Shopping Cart
        </h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Cartitem
              key={item.id}
              item={item}
              onRemove={() => removeFromCart(item.id)}
              onUpdateQuantity={updateItemQuantity}
            />
          ))
        ) : (
          <p className="text-gray-600 w-[500px] h-[300px] font-bold text-xl mt-8">
            Your cart is empty.
          </p>
        )}
      </div>
      <div className="">
        <TotalBillSummary
          subtotal={calculateSubtotal()}
          shipping={shippingCost}
          taxRate={taxRate}
        />
      </div>
    </div>
  );
};

export default Cart;
