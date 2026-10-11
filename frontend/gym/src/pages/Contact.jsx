import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaPen,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      {/* ================= HEADER ================= */}

      <section className="contact-header">
        <div className="contact-small-title">
          CONTACT US
        </div>

        <h1>
          We'd <span>Love</span> to Hear From You!
        </h1>

        <p>
          Have a question, feedback or want to join us?
          <br />
          Feel free to reach out. Our team is here to help you.
        </p>

        <div className="contact-divider">
          <span></span>
          <strong>🏋</strong>
          <span></span>
        </div>
      </section>


      {/* ================= MAIN ================= */}

      <section className="contact-container">

        {/* LEFT */}

        <div className="contact-left">

          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Our Location</h3>
              <p>
                Hitech City, Hyderabad, Telangana, India
              </p>
            </div>
          </div>


          <div className="contact-card">
            <div className="contact-icon">
              <FaPhone />
            </div>

            <div>
              <h3>Phone Number</h3>
              <p>+91 9876543210</p>
            </div>
          </div>


          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email Address</h3>
              <p>gym@gmail.com</p>
            </div>
          </div>


          <div className="contact-card">
            <div className="contact-icon">
              <FaClock />
            </div>

            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat: 5:00 AM - 10:00 PM</p>
              <p>Sunday: 6:00 AM - 2:00 PM</p>
            </div>
          </div>


          {/* MAP */}

          <div className="contact-map">
            <iframe
              title="Hitech City Hyderabad"
              src="https://www.google.com/maps?q=Hitech%20City%20Hyderabad%20Telangana%20India&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>


        {/* RIGHT */}

        <div className="contact-right">

          <div className="message-title">
            <FaPaperPlane />

            <h2>
              Send Us a Message
            </h2>
          </div>

          <p className="message-description">
            Fill out the form below and we'll get back to you
            as soon as possible.
          </p>


          <form onSubmit={handleSubmit}>

            {/* NAME + EMAIL */}

            <div className="form-row">

              <div className="input-box">
                <FaUser />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="input-box">
                <FaEnvelope />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>


            {/* PHONE */}

            <div className="input-box full">
              <FaPhone />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>


            {/* SUBJECT */}

            <div className="select-box">

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Subject
                </option>

                <option value="membership">
                  Membership
                </option>

                <option value="personal-training">
                  Personal Training
                </option>

                <option value="weight-training">
                  Weight Training
                </option>

                <option value="cardio">
                  Cardio Training
                </option>

                <option value="yoga">
                  Yoga & Fitness
                </option>

                <option value="general">
                  General Enquiry
                </option>
              </select>

            </div>


            {/* MESSAGE */}

            <div className="textarea-box">

              <FaPen />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            {/* SEND */}

            <button
              type="submit"
              className="send-button"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="contact-bottom">

        <div className="community-icon">
          <FaUsers />
        </div>

        <div className="community-content">
          <h2>
            Join Our Fitness Community Today!
          </h2>

          <p>
            Start your fitness journey with us and achieve your goals.
          </p>
        </div>

        <button className="join-button">
          Join Now
          <FaArrowRight />
        </button>

      </section>

    </div>
  );
}

export default Contact;