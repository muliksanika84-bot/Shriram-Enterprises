import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useCart();

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 😔</h2>
          <Link to="/">
            <button className="continue-btn">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h3>{item.name}</h3>

                <p>{item.weight}</p>

                <h4>₹{item.price}</h4>

                <div className="quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>

                <p>
                  <strong>
                    Subtotal: ₹{item.price * item.quantity}
                  </strong>
                </p>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total Amount : ₹{totalPrice}</h2>

            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed to Checkout →
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;