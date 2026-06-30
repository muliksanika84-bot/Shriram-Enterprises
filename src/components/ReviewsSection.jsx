import "./ReviewsSection.css";
import { FaStar } from "react-icons/fa";

function ReviewsSection() {
  return (
    <section className="reviews" id="reviews">

      <div className="section-title">
        <span>CUSTOMER REVIEWS</span>
        <h2>What Our Customers Say</h2>
        <p>
          We believe quality products create happy customers.
        </p>
      </div>

      <div className="reviews-grid">

        <div className="review-card">

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            "Excellent quality turmeric with rich colour and aroma.
            Highly recommended."
          </p>

          <h4>- Happy Customer</h4>

        </div>

        <div className="review-card">

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            "Packaging was excellent and the turmeric feels fresh and pure."
          </p>

          <h4>- Regular Buyer</h4>

        </div>

        <div className="review-card">

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>
            "Very good quality. Looking forward to ordering again."
          </p>

          <h4>- Retail Customer</h4>

        </div>

      </div>

    </section>
  );
}

export default ReviewsSection;