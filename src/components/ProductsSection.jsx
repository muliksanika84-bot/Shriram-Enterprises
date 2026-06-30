import "./ProductsSection.css";

import turmeric50 from "../assets/images/turmeric50g.jpeg";
import turmeric100 from "../assets/images/turmeric100g.jpeg";

function ProductsSection() {

  const whatsappLink = (product) => {
    const phone = "919890070845"; // Replace with your WhatsApp number

    const message = `Hello Shriram Enterprises, I am interested in your ${product}. Please share more details.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="products" id="products">

      <div className="section-title">
        <span>OUR PRODUCTS</span>

        <h2>Premium Turmeric Powder</h2>

        <p>
          Carefully processed and hygienically packed to preserve
          freshness, colour and natural aroma.
        </p>
      </div>

      <div className="product-container">

        {/* Product 1 */}

        <div className="product-card">

          <span className="product-badge">
            Popular
          </span>

          <img
            src={turmeric50}
            alt="50g Turmeric Powder"
          />

          <h3>Turmeric Powder</h3>

          <h4>50g Pack</h4>

          <p>
            Perfect for everyday cooking with rich colour,
            aroma and authentic taste.
          </p>

          <button
            onClick={() => whatsappLink("50g Turmeric Powder")}
          >
            Enquire Now
          </button>

        </div>

        {/* Product 2 */}

        <div className="product-card">

          <span className="product-badge">
            Best Seller
          </span>

          <img
            src={turmeric100}
            alt="100g Turmeric Powder"
          />

          <h3>Turmeric Powder</h3>

          <h4>100g Pack</h4>

          <p>
            Ideal for families and regular use.
            Premium quality turmeric sourced directly from farms.
          </p>

          <button
            onClick={() => whatsappLink("100g Turmeric Powder")}
          >
            Enquire Now
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductsSection;