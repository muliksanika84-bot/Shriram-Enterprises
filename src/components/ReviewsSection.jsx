import "./ReviewsSection.css";

function ReviewsSection() {
  return (
    <section className="reviews">

      <span className="section-tag">CUSTOMER REVIEWS</span>

      <h2>What Our Customers Say</h2>

      <div className="reviews-grid">

        <div className="review-card">
          ⭐⭐⭐⭐⭐
          <p>
            Excellent quality spices with authentic taste. Highly recommended.
          </p>
          <h4>- Happy Customer</h4>
        </div>

        <div className="review-card">
          ⭐⭐⭐⭐⭐
          <p>
            Fresh products, good packaging and timely delivery.
          </p>
          <h4>- Wholesale Buyer</h4>
        </div>

        <div className="review-card">
          ⭐⭐⭐⭐⭐
          <p>
            One of the best quality turmeric powder and masalas we have used.
          </p>
          <h4>- Regular Customer</h4>
        </div>

      </div>

    </section>
  );
}

export default ReviewsSection;