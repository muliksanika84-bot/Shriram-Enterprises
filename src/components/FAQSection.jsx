import "./FAQSection.css";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "Is your turmeric powder 100% natural?",
    answer:
      "Yes. Our turmeric powder is made from carefully selected turmeric and contains no artificial colours or chemicals.",
  },
  {
    question: "Which pack sizes are available?",
    answer:
      "Currently, we offer 50g and 100g packs suitable for daily household use.",
  },
  {
    question: "Do you accept bulk orders?",
    answer:
      "Yes. We supply retailers, wholesalers and distributors. Please contact us for bulk enquiries.",
  },
  {
    question: "How can I contact Shriram Enterprises?",
    answer:
      "You can reach us through WhatsApp, Instagram or our Contact section.",
  },
];

function FAQSection() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" id="faq">

      <div className="section-title">
        <span>FAQ</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to the most common questions about our products.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
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