import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./YogaFitnessBooking.css";

import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaClock,
  FaComments,
  FaCheckCircle,
  FaHeart,
  FaLeaf,
  FaUsers,
  FaHeadphones,
  FaAward,
  FaDumbbell,
} from "react-icons/fa";

// =====================================================
// EXISTING IMAGE - NO NEW IMAGE FILE REQUIRED
// =====================================================
import yogaFitnessImage from "../assets/images/services/yoga-fitness.jpg";

function YogaFitnessBooking() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    date: "",
    time: "",
    trainer: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // =====================================================
  // PROGRAMS
  // =====================================================
  const programs = [
    "Yoga",
    "Functional Fitness",
    "HIIT Training",
    "Mind & Body",
  ];

  // =====================================================
  // TIME SLOTS
  // =====================================================
  const timeSlots = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
  ];

  // =====================================================
  // TRAINERS
  // =====================================================
  const trainers = [
    "Any Available Trainer",
    "Priya - Yoga Trainer",
    "Ananya - Fitness Trainer",
    "Rahul - Functional Trainer",
    "Sneha - Wellness Trainer",
  ];

  // =====================================================
  // INPUT HANDLER
  // =====================================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================================
  // FORM SUBMIT
  // =====================================================
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    // Demo booking behaviour.
    // Backend/API can be connected here later.
    console.log("Yoga & Fitness Booking:", formData);
  };

  // =====================================================
  // BACK BUTTON
  // =====================================================
  const handleBack = () => {
    navigate("/yoga-fitness");
  };

  return (
    <div className="yoga-booking-page">

      {/* =================================================
          TOP BACK BUTTON
      ================================================= */}
      <div className="booking-top-bar">
        <button
          type="button"
          className="back-yoga-btn"
          onClick={handleBack}
        >
          <FaArrowLeft />
          <span>Back to Yoga &amp; Fitness</span>
        </button>
      </div>

      {/* =================================================
          MAIN BOOKING LAYOUT
      ================================================= */}
      <main className="yoga-booking-container">

        {/* =================================================
            LEFT SIDE
        ================================================= */}
        <section className="yoga-booking-left">

          <div className="booking-left-content">

            <h1>
              Book Your
              <span> Yoga &amp; Fitness </span>
              Session
            </h1>

            <div className="booking-title-decoration">
              <span></span>
              <FaLeaf />
              <span></span>
            </div>

            <p className="booking-intro">
              Take the next step towards a healthier, stronger and
              more balanced you. Book your session with our certified
              trainers today!
            </p>

            {/* =================================================
                BENEFIT ITEMS
            ================================================= */}
            <div className="booking-benefits-list">

              <div className="booking-benefit">
                <div className="benefit-icon">
                  <FaUser />
                </div>

                <div>
                  <h3>Expert Trainers</h3>
                  <p>
                    Certified and experienced yoga &amp; fitness
                    professionals.
                  </p>
                </div>
              </div>

              <div className="booking-benefit">
                <div className="benefit-icon">
                  <FaCalendarAlt />
                </div>

                <div>
                  <h3>Flexible Schedule</h3>
                  <p>
                    Choose the time that fits your lifestyle.
                  </p>
                </div>
              </div>

              <div className="booking-benefit">
                <div className="benefit-icon">
                  <FaHeart />
                </div>

                <div>
                  <h3>Personalized Guidance</h3>
                  <p>
                    Customized sessions for your goals and fitness level.
                  </p>
                </div>
              </div>

              <div className="booking-benefit">
                <div className="benefit-icon">
                  <FaUsers />
                </div>

                <div>
                  <h3>Holistic Wellness</h3>
                  <p>
                    Improve your body, mind and overall well-being.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* =================================================
              LEFT IMAGE
          ================================================= */}
          <div className="booking-image-wrapper">

            <img
              src={yogaFitnessImage}
              alt="Yoga and Fitness"
            />

            {/* IMAGE BENEFITS CARD */}
            <div className="image-benefits-card">

              <h3>Session Benefits</h3>

              <div>
                <FaCheckCircle />
                <span>Improves flexibility &amp; strength</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Reduces stress &amp; anxiety</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Enhances posture &amp; balance</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Boosts energy &amp; focus</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Promotes overall wellness</span>
              </div>

            </div>

          </div>

          {/* =================================================
              PROGRAMS
          ================================================= */}
          <div className="booking-programs-box">

            <h2>
              Our <span>Yoga &amp; Fitness</span> Programs
            </h2>

            <div className="booking-program-grid">

              <div className="booking-program-card">
                <div className="program-round-icon yoga-icon">
                  <FaLeaf />
                </div>

                <h3>Yoga</h3>

                <p>
                  Improve flexibility, balance and mental wellness.
                </p>
              </div>

              <div className="booking-program-card">
                <div className="program-round-icon fitness-icon">
                  <FaDumbbell />
                </div>

                <h3>Functional Fitness</h3>

                <p>
                  Build strength, stamina and overall performance.
                </p>
              </div>

              <div className="booking-program-card">
                <div className="program-round-icon hiit-icon">
                  <FaHeart />
                </div>

                <h3>HIIT Training</h3>

                <p>
                  High intensity workouts to burn fat and build endurance.
                </p>
              </div>

              <div className="booking-program-card">
                <div className="program-round-icon mind-icon">
                  <FaUser />
                </div>

                <h3>Mind &amp; Body</h3>

                <p>
                  Reduce stress, improve focus and achieve inner balance.
                </p>
              </div>

            </div>

          </div>

          {/* =================================================
              HELP BOX
          ================================================= */}
          <div className="booking-help-box">

            <div className="help-icon">
              <FaHeadphones />
            </div>

            <div>
              <h3>Need Help?</h3>
              <p>
                Our support team is here to help you.
              </p>
            </div>

          </div>

        </section>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}
        <section className="yoga-booking-right">

          {/* =================================================
              BOOKING FORM
          ================================================= */}
          <div className="booking-form-card">

            <div className="booking-form-heading">

              <FaLeaf className="form-leaf-icon" />

              <h2>
                Yoga &amp; Fitness <span>Booking Form</span>
              </h2>

              <div className="form-heading-line">
                <span></span>
                <FaLeaf />
                <span></span>
              </div>

            </div>

            {submitted ? (

              /* =================================================
                  SUCCESS MESSAGE
              ================================================= */
              <div className="booking-success">

                <FaCheckCircle />

                <h2>Booking Request Submitted!</h2>

                <p>
                  Thank you, <strong>{formData.fullName}</strong>.
                  Your Yoga &amp; Fitness booking request has been
                  received.
                </p>

                <div className="success-details">
                  <p>
                    <strong>Program:</strong>{" "}
                    {formData.program}
                  </p>

                  <p>
                    <strong>Date:</strong>{" "}
                    {formData.date}
                  </p>

                  <p>
                    <strong>Time:</strong>{" "}
                    {formData.time}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="book-another-btn"
                >
                  Book Another Session
                </button>

              </div>

            ) : (

              /* =================================================
                  FORM
              ================================================= */
              <form
                className="yoga-booking-form"
                onSubmit={handleSubmit}
              >

                {/* ROW 1 */}
                <div className="form-two-columns">

                  <div className="form-group">
                    <label htmlFor="fullName">
                      <FaUser />
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope />
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                </div>

                {/* ROW 2 */}
                <div className="form-two-columns">

                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone />
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="program">
                      <FaHeart />
                      Select Program
                    </label>

                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Choose a program
                      </option>

                      {programs.map((program) => (
                        <option
                          key={program}
                          value={program}
                        >
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* ROW 3 */}
                <div className="form-two-columns">

                  <div className="form-group">
                    <label htmlFor="date">
                      <FaCalendarAlt />
                      Preferred Date
                    </label>

                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={
                        new Date()
                          .toISOString()
                          .split("T")[0]
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">
                      <FaClock />
                      Preferred Time
                    </label>

                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select time
                      </option>

                      {timeSlots.map((time) => (
                        <option
                          key={time}
                          value={time}
                        >
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* TRAINER */}
                <div className="form-group full-width">
                  <label htmlFor="trainer">
                    <FaUser />
                    Select Trainer (Optional)
                  </label>

                  <select
                    id="trainer"
                    name="trainer"
                    value={formData.trainer}
                    onChange={handleChange}
                  >
                    {trainers.map((trainer) => (
                      <option
                        key={trainer}
                        value={trainer}
                      >
                        {trainer}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="form-group full-width">

                  <label htmlFor="message">
                    <FaComments />
                    Additional Message (Optional)
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals or any specific requirements..."
                    rows="5"
                  />

                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="confirm-booking-btn"
                >
                  <FaCalendarAlt />
                  <span>Confirm Booking</span>
                </button>

              </form>
            )}

          </div>

          {/* =================================================
              WHY CHOOSE US
          ================================================= */}
          <div className="why-choose-box">

            <h2>
              Why <span>Choose Us?</span>
            </h2>

            <div className="why-choose-grid">

              <div className="why-item">

                <div className="why-icon">
                  <FaAward />
                </div>

                <div>
                  <h3>Certified Trainers</h3>
                  <p>
                    Learn from the best and achieve your goals.
                  </p>
                </div>

              </div>

              <div className="why-item">

                <div className="why-icon">
                  <FaClock />
                </div>

                <div>
                  <h3>Flexible Timings</h3>
                  <p>
                    Morning, evening and weekend slots available.
                  </p>
                </div>

              </div>

              <div className="why-item">

                <div className="why-icon">
                  <FaUsers />
                </div>

                <div>
                  <h3>Friendly Environment</h3>
                  <p>
                    Positive and supportive community for everyone.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              CONTACT BOX
          ================================================= */}
          <div className="booking-contact-box">

            <div className="contact-info">

              <FaPhone />

              <div>
                <span>Call Us</span>
                <strong>+91 12345 67890</strong>
              </div>

            </div>

            <div className="contact-divider"></div>

            <div className="contact-info">

              <FaEnvelope />

              <div>
                <span>Email Us</span>
                <strong>support@yogafitness.com</strong>
              </div>

            </div>

            <div className="contact-decoration">
              <FaLeaf />
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default YogaFitnessBooking;