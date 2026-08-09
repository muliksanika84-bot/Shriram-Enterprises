import "./OfferBanner.css";
import saleImage from "../assets/images/monsoon-sale.jpeg";

function OfferBanner() {
  return (
    <section className="offer-banner">

      <div className="offer-card">

        <img
          src={saleImage}
          alt="Shriram Masales Monsoon Mega Sale"
        />

      </div>

    </section>
  );
}

export default OfferBanner;