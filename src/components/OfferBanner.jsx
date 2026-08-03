import "./OfferBanner.css";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

function OfferBanner() {
  const saleDate = new Date("August 6, 2026 00:00:00").getTime();

  const calculateTime = () => {
    const now = new Date().getTime();
    const difference = saleDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="offer-banner">

      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>
      <div className="floating-circle circle3"></div>

    <div className="gift gift1">🎁</div>
    <div className="gift gift2">🌿</div>
    <div className="gift gift3">⭐</div>
    <div className="gift gift4">🎉</div>

      <div className="offer-card">

        {!timeLeft ? (
          <>
            <span className="offer-badge live">
              🎉 SALE IS LIVE
            </span>

            <h1>🌧️ Monsoon Mega Sale</h1>

            <h3>🔥 Shop Now & Grab Amazing Discounts!</h3>

            <a href="#products" className="offer-btn">
              Explore Products
              <FaArrowRight />
            </a>
          </>
        ) : (
          <>
            <span className="offer-badge">
              🚨 COMING SOON
            </span>

            <h1>🌧️ Monsoon Mega Sale</h1>

            <h3>
              📅 Starts From <span>6 August</span>
            </h3>

            <p>
              🔥 Huge Discounts • 🎁 Exciting Launch Offers • ⭐ Limited Time Only
            </p>

            <div className="countdown">

              <div>
                <h2>{timeLeft.days}</h2>
                <span>Days</span>
              </div>

              <div>
                <h2>{timeLeft.hours}</h2>
                <span>Hours</span>
              </div>

              <div>
                <h2>{timeLeft.minutes}</h2>
                <span>Minutes</span>
              </div>

              <div>
                <h2>{timeLeft.seconds}</h2>
                <span>Seconds</span>
              </div>

            </div>

            <a href="#products" className="offer-btn">
              Explore Products
              <FaArrowRight />
            </a>
          </>
        )}

      </div>

    </section>
  );
}

export default OfferBanner;