import "./ProductsSection.css";

import turmeric50 from "../assets/images/turmeric50g.jpeg";
import turmeric100 from "../assets/images/turmeric100g.jpeg";

function ProductsSection() {
  return (
    <section className="products" id="products">

      <span className="section-tag">
        OUR PRODUCTS
      </span>

      <h2>Our Best Selling Products</h2>

      <p className="products-subtitle">
        Premium quality turmeric powder made from carefully selected turmeric
        for rich colour, aroma and authentic taste.
      </p>

      <div className="products-offer">
        🎁 BUY 3 GET 2 FREE 🎁
      </div>

      <p className="offer-description">
        Buy any 3 packs and get 2 packs absolutely FREE!
      </p>

      <div className="products-grid">

        {/* 50G */}

        <div className="product-card">

          <div className="offer-tag">
            🎁 BUY 3 GET 2 FREE
          </div>

          <div className="product-badge">
            Best Seller
          </div>

          <img
            src={turmeric50}
            alt="Turmeric Powder 50g"
          />

          <h3>Turmeric Powder</h3>

          <p>50 Gram Pack</p>

          <h4>₹35</h4>

          <span className="stock">
            ✔ In Stock
          </span>

          <a
            href="https://wa.me/919890070845?text=Hello%20Shriram%20Masales,%20I%20want%20to%20order%20the%2050g%20Turmeric%20Powder.%20I%20want%20to%20use%20the%20Buy%203%20Get%202%20Free%20offer."
            target="_blank"
            rel="noreferrer"
          >
            Order Now
          </a>

        </div>


        {/* 100G */}

        <div className="product-card">

          <div className="offer-tag">
            🎁 BUY 3 GET 2 FREE
          </div>

          <div className="product-badge">
            Best Seller
          </div>

          <img
            src={turmeric100}
            alt="Turmeric Powder 100g"
          />

          <h3>Turmeric Powder</h3>

          <p>100 Gram Pack</p>

          <h4>₹55</h4>

          <span className="stock">
            ✔ In Stock
          </span>

          <a
            href="https://wa.me/919890070845?text=Hello%20Shriram%20Masales,%20I%20want%20to%20order%20the%20100g%20Turmeric%20Powder.%20I%20want%20to%20use%20the%20Buy%203%20Get%202%20Free%20offer."
            target="_blank"
            rel="noreferrer"
          >
            Order Now
          </a>

        </div>

      </div>

    </section>
  );
}

export default ProductsSection;