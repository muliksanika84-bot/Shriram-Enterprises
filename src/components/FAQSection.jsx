import "./FAQSection.css";
import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaQuestionCircle,
} from "react-icons/fa";

const faqData = [
  {
    question: "Is your turmeric powder 100% natural?",
    answer:
      "Yes. Our turmeric powder is made from carefully selected turmeric without artificial colours or preservatives.",
  },
  {
    question: "Which pack sizes are available?",
    answer:
      "We currently offer 50g and 100g packs suitable for daily household use.",
  },
  {
    question: "Do you accept wholesale orders?",
    answer:
      "Yes. We supply retailers, wholesalers and distributors. Contact us for bulk order pricing.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can order directly through WhatsApp by clicking the Order Now button available on our website.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located in Karad, Maharashtra and supply premium quality masales across the region.",
  },
];

function FAQSection() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" id="faq">

      <span className="section-tag">
        FAQ
      </span>

      <h2>
        Frequently Asked Questions
      </h2>

      <p className="faq-subtitle">
        Everything you need to know about our products and services.
      </p>

      <div className="faq-container">

        {faqData.map((item, index) => (

          <div
            className={`faq-item ${active === index ? "active" : ""}`}
            key={index}
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <div className="question-left">
                <FaQuestionCircle />
                <span>{item.question}</span>
              </div>

              {active === index ? <FaMinus /> : <FaPlus />}

            </button>

            {active === index && (

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQSection;