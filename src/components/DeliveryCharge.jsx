import { useState } from "react";
import "./DeliveryCharge.css";

function DeliveryCharge() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("");
  const [total, setTotal] = useState(null);

  const prices = {
    "50g": 35,
    "100g": 55,
  };

  const calculateTotal = () => {
    if (!product || !location) {
      alert("Please select a product and delivery location.");
      return;
    }

    const productTotal = prices[product] * Number(quantity);

    let deliveryCharge = 0;

    if (location === "karad") {
      deliveryCharge = 50;
    } else if (location === "maharashtra") {
      deliveryCharge = 80;
    } else if (location === "bulk") {
      setTotal("contact");
      return;
    }

    setTotal({
      productTotal,
      deliveryCharge,
      finalTotal: productTotal + deliveryCharge,
    });
  };

  return (
    <section className="delivery-section">

      <div className="section-title">
        <span>DELIVERY & ORDER</span>

        <h2>Calculate Your Order</h2>

        <p>
          Select your product, quantity and delivery location.
        </p>
      </div>

      <div className="delivery-box">

        {/* Product */}

        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="">Select Product</option>

          <option value="50g">
            Turmeric Powder - 50g (₹37)
          </option>

          <option value="100g">
            Turmeric Powder - 100g (₹75)
          </option>
        </select>


        {/* Quantity */}

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />


        {/* Location */}

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Delivery Location</option>

          <option value="karad">
            Local - ₹50
          </option>

          <option value="maharashtra">
            Other Maharashtra - ₹80
          </option>

          <option value="bulk">
            Bulk Order - Contact Us
          </option>
        </select>


        {/* Calculate */}

        <button onClick={calculateTotal}>
          Calculate Total
        </button>


        {/* Result */}

        {total && total !== "contact" && (
          <div className="delivery-result">

            <h3>Order Summary</h3>

            <p>
              Product Total:
              <strong> ₹{total.productTotal}</strong>
            </p>

            <p>
              Delivery Charge:
              <strong> ₹{total.deliveryCharge}</strong>
            </p>

            <hr />

            <h3>
              Final Total:
              <strong> ₹{total.finalTotal}</strong>
            </h3>

          </div>
        )}


        {/* Bulk Order */}

        {total === "contact" && (
          <div className="delivery-result">

            <h3>Bulk Order</h3>

            <p>
              Please contact us for bulk order pricing
              and delivery charges.
            </p>

            <a href="tel:+919890070845">
              Call +91 9890070845
            </a>

          </div>
        )}

      </div>

    </section>
  );
}

export default DeliveryCharge;