import "./ProductsSection.css";
import { useCart } from "../context/CartContext";

import turmeric50 from "../assets/images/turmeric50g.jpeg";
import turmeric100 from "../assets/images/turmeric100g.jpeg";

function ProductsSection() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Turmeric Powder",
      weight: "50 Gram Pack",
      price: 35,
      image: turmeric50,
    },
    {
      id: 2,
      name: "Turmeric Powder",
      weight: "100 Gram Pack",
      price: 55,
      image: turmeric100,
    },
  ];

  return (
    <section className="products" id="products">
      <span className="section-tag">OUR PRODUCTS</span>

      <h2>Our Best Selling Products</h2>

      <p className="products-subtitle">
        Premium quality turmeric powder made from carefully selected turmeric
        for rich colour, aroma and authentic taste.
      </p>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-badge">Best Seller</div>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.weight}</p>

            <h4>₹{product.price}</h4>

            <span className="stock">✔ In Stock</span>

            <button
              className="add-cart-btn"
              onClick={() => {
                addToCart(product);
                alert("🛒 Product added to cart!");
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;