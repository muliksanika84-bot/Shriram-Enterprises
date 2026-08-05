import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart, totalPrice } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Next step: Razorpay Payment");
  };

  return (
    <div className="checkout-page">

      <div className="checkout-left">

        <h2>Delivery Details</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Complete Address"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            required
            onChange={handleChange}
          />

          <button type="submit">
            Continue to Payment
          </button>

        </form>

      </div>

      <div className="checkout-right">

        <h2>Order Summary</h2>

        {cart.map((item) => (
          <div className="summary-item" key={item.id}>
            <span>
              {item.name} ({item.weight}) × {item.quantity}
            </span>

            <span>
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}

        <hr />

        <h3>Total : ₹{totalPrice}</h3>

      </div>

    </div>
  );
}

export default Checkout;