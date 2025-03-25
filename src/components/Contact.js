import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Create a mailto link
    const mailtoLink = `mailto:ghvr946@gmail.com?subject=Contact from ${name}&body=${message}%0A%0AFrom: ${email}`;

    // Open the mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <div className="contact-text">
        <h1>Contact Me</h1>
        <p>Fill out the form below to send me an email directly.</p>

        {/* Display Email & Phone */}
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:your-ghvr946@gmail.com">ghvr946@gmail.com</a></p>
          <p><strong>Mobile:</strong> <a href="tel:+91 6302683731">+91 6302683731</a></p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Profile Image */}
      <img src="/images/profile.jpg" alt="Profile" className="contact-img" />
    </div>
  );
};

export default Contact;
