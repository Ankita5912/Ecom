import { useState } from "react";

function Form({ onClose, total }) {
  const [formName, setFormName] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [error, setError] = useState({});

  const exactName = (e) => {
    setFormName(e.target.value);
  };

  const handleAddress = (e) => {
    setFormAddress(e.target.value);
  };

  const handleEmail = (e) => {
    setFormEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setFormPhone(e.target.value);
  };

  const validateForm = () => {
    let error = {};
    if (!formName) {
      error.name = "*Name is required";
    }
    if (!formAddress) {
      error.address = "*Address is required";
    }
    if (!formEmail) {
      error.email = "*Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formEmail)) {
      error.email = "Invalid email address";
    }
    if (!formPhone) {
      error.phone = "*Phone number is required";
    } else if (!/^\d{10}$/.test(formPhone)) {
      error.phone = "Invalid phone number";
    }
    setError(error);
    return Object.keys(error).length === 0;
  };

  const paymentHandler = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const amount = total * 100;
      const currency = "INR";
      const receiptId = "1234567";
      const response = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, currency, receipt: receiptId }),
      });

      const order = await response.json();

      var option = {
        key: "rzp_test_0foxFQEiARqncR",
        amount: order.amount,
        currency: order.currency,
        name: formName,
        description: "Payment for order",
        image:
          "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        order_id: order.id,
        handler: async function (response) {
          const body = { ...response };

          const validateResponse = await fetch(
            "http://localhost:5000/validate",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }
          );
          const jsonResponse = await validateResponse.json();
        },
        prefill: {
          name: "Virat Kohli",
          email: "Kohlivirat9@gmail.com",
          phone: "9876543210",
        },
        theme: {
          color: "#111",
        },
      };
      var rzp1 = new Razorpay(option);
      rzp1.on("Payment Failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzp1.open();
      event.preventDefault();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="w-[570px] bg-white rounded-lg h-[500px] relative flex items-start">
        <div className="flex ml-[50px] absolute top-10 py-[50px] px-[40px] flex-col rounded-lg border border-black w-[480px] h-[420px] items-start justify-center">
          <h1 className="text-2xl">
            Fill these details to complete your Order
          </h1>

          <form
            action=""
            className="flex gap-2 mt-5 flex-col items-center justify-center"
          >
            <div className="flex gap-4 mt-4">
              <label htmlFor="">Full Name</label>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="Full name"
                  value={formName}
                  onChange={exactName}
                  className="w-[280px] py-1 px-3 ml-5 border border-black"
                  required
                />
                {error.name && (
                  <p className="text-red-500 ml-5 ">{error.name}</p>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <label htmlFor="">Full Address</label>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="Full address"
                  value={formAddress}
                  onChange={handleAddress}
                  className="w-[280px] px-3 py-1 ml-4 border border-black"
                  required
                />
                {error.address && (
                  <p className="text-red-500 ml-4">{error.address}</p>
                )}
              </div>
            </div>
            <div className="flex gap-3 mt-4 items-start">
              <label htmlFor="">Email Address</label>
              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  value={formEmail}
                  onChange={handleEmail}
                  className="w-[280px] py-1 px-3 border border-black"
                  required
                />
                {error.email && <p className="text-red-500">{error.email}</p>}
              </div>
            </div>
            <div className="flex gap-3 mt-4 items-center">
              <label htmlFor="">Phone No.</label>
              <div className="flex flex-col">
                <input
                  type="tel"
                  id="Phone"
                  value={formPhone}
                  onChange={handlePhone}
                  className="w-[280px] py-1 px-3 border ml-6 border-black"
                  required
                />
                {error.phone && (
                  <p className="text-red-500 ml-6">{error.phone}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              onClick={paymentHandler}
              className="w-[220px] h-[40px] px-7 rounded-lg mt-8 bg-black text-white ml-[30px]"
            >
              Buy Now...
            </button>
          </form>
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-black text-2xl font-bold"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
