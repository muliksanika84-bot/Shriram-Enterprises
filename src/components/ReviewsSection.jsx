import "./ReviewsSection.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

function ReviewsSection() {
  return (
    <section className="reviews" id="reviews">

      <span className="section-tag">
        CUSTOMER REVIEWS
      </span>

      <h2>
        What Our Customers Say
      </h2>

      <p className="reviews-subtitle">
        Customer satisfaction is our biggest achievement. Here's what our valued customers have to say.
      </p>

      <div className="reviews-grid">

        <div className="review-card">

          <FaQuoteLeft className="quote"/>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            Excellent quality turmeric powder with rich colour and authentic taste.
            Packaging was hygienic and delivery was quick.
          </p>

          <h4>Happy Customer</h4>

          <span>Karad, Maharashtra</span>

        </div>

        <div className="review-card">

          <FaQuoteLeft className="quote"/>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            We regularly purchase for our grocery shop.
            Customers love the freshness and premium quality.
          </p>

          <h4>Wholesale Buyer</h4>

          <span>Satara</span>

        </div>

        <div className="review-card">

          <FaQuoteLeft className="quote"/>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            Very satisfied with the aroma, taste and packaging.
            Definitely recommended for every kitchen.
          </p>

          <h4>Regular Customer</h4>

          <span>Pune</span>

        </div>

      </div>

    </section>
  );
}

export default ReviewsSection;