import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";

function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleEnquiryChange = (e) => {
    const messages = {
      product:
        "Hello Shriram Masales,\n\nI would like to know more about your turmeric powder products.",

      order:
        "Hello Shriram Masales,\n\nI would like to place an order. Kindly contact me with the details.",

      wholesale:
        "Hello Shriram Masales,\n\nI am interested in wholesale purchasing. Please share your price list and dealership details.",

      dealership:
        "Hello Shriram Masales,\n\nI would like to know about your dealership opportunities.",

      enquiry:
        "Hello Shriram Masales,\n\nI have an enquiry regarding your products.",
    };

    form.current.message.value = messages[e.target.value] || "";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qjztk4a",
        "template_nbbzzf9",
        form.current,
        "gw_hvEElnevc-RFY2"
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch(() => {
        alert("❌ Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-left">

        <span className="section-tag">
          CONTACT US
        </span>

        <h2>Let's Connect</h2>

        <p className="contact-text">
          We are always happy to help you with product enquiries,
          wholesale orders, dealership opportunities and customer support.
        </p>

        <div className="contact-info">

          <div className="info-box">
            <FaPhoneAlt />
            <div>
              <h4>Call Us</h4>
              <a href="tel:+919890070845">+91 9890070845</a>
              <a href="tel:+918308288352">+91 8308288352</a>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <a href="mailto:shriramenterprises1512@gmail.com">
                shriramenterprises1512@gmail.com
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaWhatsapp />
            <div>
              <h4>WhatsApp</h4>
              <a
                href="https://wa.me/919890070845"
                target="_blank"
                rel="noreferrer"
              >
                Chat with us
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaInstagram />
            <div>
              <h4>Instagram</h4>
              <a
                href="https://www.instagram.com/shriram.ent_official"
                target="_blank"
                rel="noreferrer"
              >
                @shriram.ent_official
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <span>Karad, Maharashtra, India</span>
            </div>
          </div>

          <div className="info-box">
            <FaClock />
            <div>
              <h4>Business Hours</h4>
              <span>Monday - Saturday</span>
              <span>10:00 AM - 7:00 PM</span>
            </div>
          </div>

        </div>

      </div>

      <div className="contact-right">

        <h3>Send Us an Enquiry</h3>

       <form ref={form} onSubmit={sendEmail}>

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Your Phone Number"
    required
  />

  <select
    name="enquiry_type"
    onChange={handleEnquiryChange}
    required
  >
    <option value="">Select Enquiry Type</option>

    <option value="product">
      Product Information
    </option>

    <option value="order">
      Place an Order
    </option>

    <option value="wholesale">
      Wholesale Order
    </option>

    <option value="dealership">
      Dealership
    </option>

    <option value="enquiry">
      General Enquiry
    </option>
  </select>

  <textarea
    name="message"
    rows="6"
    placeholder="Your Message"
    required
  ></textarea>

  <button type="submit" disabled={loading}>
    <FaPaperPlane />
    {loading ? "Sending..." : "Send Enquiry"}
  </button>

</form>

      </div>

    </section>
  );
}

export default ContactSection;