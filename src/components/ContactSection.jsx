import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./ContactSection.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_3zvbdjg",
        "template_h4ghcri",
        form.current,
        "dt_G4LozytmcqNAeE"
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <span className="section-tag">CONTACT US</span>
        <h2>Get In Touch</h2>
        <p>
          We'd love to hear from you. Contact us for product enquiries,
          wholesale orders or any other information.
        </p>

        <div className="contact-info">
          <div className="info-box">
            <FaPhoneAlt />
            <a href="tel:+919890070845">+91 9890070845</a>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <a href="mailto:shriramenterprises1512@gmail.com">
              shriramenterprises1512@gmail.com
            </a>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <span>Karad, Maharashtra</span>
          </div>

          <div className="info-box">
            <FaInstagram />
            <a
              href="https://www.instagram.com/shriram.ent_official?igsh=M3dsaHk3YW5kYzRk"
              target="_blank"
              rel="noreferrer"
            >
              @shriram.ent_official
            </a>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <h3>Quick Enquiry</h3>

        {/* FIXED: Form now wraps all input fields correctly */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
          />

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