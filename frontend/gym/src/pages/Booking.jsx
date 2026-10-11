import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaDumbbell,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaArrowLeft,
  FaHeadset,
} from "react-icons/fa";

import "./Booking.css";

// =====================================================
// BOOKING PAGE IMAGE
// Make sure this file exists:
// src/assets/images/services/personal-training-booking.jpg
// =====================================================
import personalTrainingBookingImage from "../assets/images/services/personal-training-booking.jpg";

function Booking() {
  const navigate = useNavigate();

  // =====================================================
  // FORM DATA
  // =====================================================
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Personal Training",
    date: "",
    time: "",
    trainer: "",
    message: "",
  });

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // HANDLE FORM SUBMIT
  // =====================================================
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Booking request submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "Personal Training",
      date: "",
      time: "",
      trainer: "",
      message: "",
    });
  };

  return (
    <div className="booking-page">
      <div className="booking-container">

        {/* =================================================
            LEFT SIDE - BOOKING FORM
        ================================================= */}
        <div className="booking-left">

          {/* Back Button */}
          <button
            type="button"
            className="booking-back-btn"
            onClick={() => navigate("/personal-training")}
          >
            <FaArrowLeft />
            <span>Back to Personal Training</span>
          </button>

          {/* Form Card */}
          <div className="booking-form-card">
            <form onSubmit={handleSubmit}>

              {/* FULL NAME */}
              <div className="booking-field">
                <label>
                  <FaUser />
                  <span>Full Name</span>
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="booking-field">
                <label>
                  <FaEnvelope />
                  <span>Email Address</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* PHONE */}
              <div className="booking-field">
                <label>
                  <FaPhone />
                  <span>Phone Number</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* TRAINING SERVICE */}
              <div className="booking-field">
                <label>
                  <FaDumbbell />
                  <span>Training Service</span>
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Personal Training">
                    Personal Training
                  </option>

                  <option value="Weight Training">
                    Weight Training
                  </option>

                  <option value="Cardio Training">
                    Cardio Training
                  </option>

                  <option value="Yoga & Fitness">
                    Yoga & Fitness
                  </option>
                </select>
              </div>

              {/* PREFERRED DATE */}
              <div className="booking-field">
                <label>
                  <FaCalendarAlt />
                  <span>Preferred Date</span>
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* PREFERRED TIME */}
              <div className="booking-field">
                <label>
                  <FaClock />
                  <span>Preferred Time</span>
                </label>

                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a time</option>
                  <option value="06:00 AM">06:00 AM</option>
                  <option value="07:00 AM">07:00 AM</option>
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="05:00 PM">05:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                </select>
              </div>

              {/* SELECT TRAINER */}
              <div className="booking-field">
                <label>
                  <FaUsers />
                  <span>Select Trainer</span>
                </label>

                <select
                  name="trainer"
                  value={formData.trainer}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your trainer</option>
                  <option value="Rahul">Rahul</option>
                  <option value="Arjun">Arjun</option>
                  <option value="Vikram">Vikram</option>
                  <option value="Priya">Priya</option>
                </select>
              </div>

              {/* ADDITIONAL MESSAGE */}
              <div className="booking-field booking-message-field">
                <label>
                  <FaCheckCircle />
                  <span>Additional Message</span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals or any special requirements..."
                  rows="4"
                ></textarea>
              </div>

              {/* CONFIRM BOOKING */}
              <button
                type="submit"
                className="confirm-booking-btn"
              >
                <FaCheckCircle />
                <span>Confirm Booking</span>
              </button>

            </form>
          </div>
        </div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}
        <div className="booking-right">

          {/* BOOKING HEADING */}
          <div className="booking-heading">

            <FaDumbbell className="booking-heading-icon" />

            <h1>
              Book a <span>Session</span>
            </h1>

            <div className="booking-title-line">
              <span></span>
              <FaDumbbell />
              <span></span>
            </div>

            <p>
              Schedule your personal training session with one of our
              certified professional trainers.
            </p>

          </div>

          {/* =================================================
              INFORMATION CARD
          ================================================= */}
          <div className="booking-info-card">

            {/* =================================================
                BOOKING IMAGE
            ================================================= */}
            <div className="booking-image-container">

              <img
                src={personalTrainingBookingImage}
                alt="Personal Training Session"
                className="booking-main-image"
              />

              {/* IMAGE OVERLAY TEXT */}
              <div className="booking-image-overlay">
                <h2>YOUR GOALS</h2>
                <h3>OUR MISSION</h3>
              </div>

            </div>

            {/* =================================================
                FEATURES
            ================================================= */}
            <div className="booking-features">

              {/* PROFESSIONAL TRAINERS */}
              <div className="booking-feature">

                <div className="feature-icon">
                  <FaDumbbell />
                </div>

                <div className="feature-text">
                  <h3>Professional Trainers</h3>

                  <p>
                    Certified trainers to guide your fitness journey.
                  </p>
                </div>

              </div>

              {/* FLEXIBLE SCHEDULING */}
              <div className="booking-feature">

                <div className="feature-icon">
                  <FaCalendarAlt />
                </div>

                <div className="feature-text">
                  <h3>Flexible Scheduling</h3>

                  <p>
                    Choose a date and time that works for you.
                  </p>
                </div>

              </div>

              {/* PERSONALIZED TRAINING */}
              <div className="booking-feature">

                <div className="feature-icon">
                  <FaCheckCircle />
                </div>

                <div className="feature-text">
                  <h3>Personalized Training</h3>

                  <p>
                    Training plans designed around your goals.
                  </p>
                </div>

              </div>

            </div>

            {/* =================================================
                HELP BOX
            ================================================= */}
            <div className="booking-help-box">

              {/* HELP LEFT */}
              <div className="help-left">

                <div className="help-icon">
                  <FaHeadset />
                </div>

                <div>
                  <h3>Need Help?</h3>

                  <p>
                    Our support team is here to help you.
                  </p>
                </div>

              </div>

              <div className="help-divider"></div>

              {/* HELP RIGHT */}
              <div className="help-right">

                <FaPhone />

                <div>
                  <span>Call Us</span>
                  <strong>+91 12345 67890</strong>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Booking;