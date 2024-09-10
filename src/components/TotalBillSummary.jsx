import { useState } from "react";
import Form from "./Form";

const TotalBillSummary = ({ subtotal, taxRate }) => {
  const donation = 2;

  const calculateTax = () => {
    return (subtotal * taxRate).toFixed(2);
  };

  const calculateTotal = () => {
    return (Number(subtotal) + donation + Number(calculateTax())).toFixed(2);
  };

  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpenForm = () => {
    if (subtotal <= 0) {
      setErrorMessage("Cart is empty. Can't place order.");
      return;
    }
    setErrorMessage("");
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-white shadow rounded mt-4 fixed w-[400px]">
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Subtotal Price:</span>
        <span>₹ {subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping Cost:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Taxes & GST ({taxRate * 100}%):</span>
        <span>₹ {calculateTax()}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Donation:</span>
        <span>₹ {donation}</span>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between font-bold text-lg">
        <span>Estimated Total:</span>
        <span>₹ {calculateTotal()}</span>
      </div>
      <div className="font-bold mt-2 text-xl text-red-600">{errorMessage}</div>
      <button
        type="button"
        className="mt-8 h-[45px] w-[350px] bg-black text-white rounded-xl font-bold"
        onClick={handleOpenForm}
      >
        Place Order
      </button>
      {showForm && <Form total={calculateTotal()} onClose={handleCloseForm} />}
    </div>
  );
};

export default TotalBillSummary;
