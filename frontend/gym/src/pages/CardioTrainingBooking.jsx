import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CardioTrainingBooking.css";

import {
  FaHeartbeat,
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaUserTie,
  FaCommentAlt,
  FaCheckCircle,
  FaFire,
  FaLungs,
  FaStopwatch,
  FaSmile,
  FaHeadphones,
} from "react-icons/fa";

function CardioTrainingBooking() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Cardio Training",
    date: "",
    trainer: "Any Available Trainer",
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

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.date
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(
      `Booking confirmed for ${formData.fullName}!\n\nService: ${formData.service}\nDate: ${formData.date}`
    );

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "Cardio Training",
      date: "",
      trainer: "Any Available Trainer",
      message: "",
    });
  };

  const benefits = [
    {
      icon: <FaHeartbeat />,
      title: "Improved",
      subtitle: "Heart Health",
    },
    {
      icon: <FaFire />,
      title: "Burn",
      subtitle: "More Calories",
    },
    {
      icon: <FaStopwatch />,
      title: "Better",
      subtitle: "Endurance",
    },
    {
      icon: <FaLungs />,
      title: "Increase",
      subtitle: "Lung Capacity",
    },
    {
      icon: <FaSmile />,
      title: "Reduce Stress",
      subtitle: "& Improve Mood",
    },
  ];

  const expectations = [
    "Personalized cardio plan based on your fitness level",
    "Variety of workouts: Treadmill, HIIT, Cycling, Rowing & more",
    "Heart rate monitoring and performance tracking",
    "Guidance to improve stamina and endurance",
    "Motivation and support every step of the way",
  ];

  return (
    <div className="cardio-booking-page">

      {/* =====================================================
          LEFT SIDE - BOOKING FORM
      ====================================================== */}

      <div className="cardio-booking-left">

        {/* BACK BUTTON */}
        <Link to="/cardio-training" className="cardio-back-button">
          <FaArrowLeft />
          <span>Back to Cardio Training</span>
        </Link>

        {/* FORM CARD */}
        <div className="cardio-form-card">

          <h2 className="cardio-form-title">
            <FaHeartbeat />
            <span>
              <strong>Cardio Training</strong> Booking Form
            </span>
          </h2>

          <form onSubmit={handleSubmit}>

            {/* FULL NAME */}
            <div className="cardio-form-group">
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

            {/* EMAIL */}
            <div className="cardio-form-group">
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

            {/* PHONE */}
            <div className="cardio-form-group">
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

            {/* SERVICE */}
            <div className="cardio-form-group">
              <label htmlFor="service">
                <FaHeartbeat />
                Training Service
              </label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="Cardio Training">
                  Cardio Training
                </option>

                <option value="Personal Training">
                  Personal Training
                </option>

                <option value="Weight Training">
                  Weight Training
                </option>

                <option value="Yoga & Fitness">
                  Yoga & Fitness
                </option>
              </select>
            </div>

            {/* DATE */}
            <div className="cardio-form-group">
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
                required
              />
            </div>

            {/* TRAINER */}
            <div className="cardio-form-group">
              <label htmlFor="trainer">
                <FaUserTie />
                Select Trainer (Optional)
              </label>

              <select
                id="trainer"
                name="trainer"
                value={formData.trainer}
                onChange={handleChange}
              >
                <option value="Any Available Trainer">
                  Any Available Trainer
                </option>

                <option value="John Smith">
                  John Smith
                </option>

                <option value="Sarah Johnson">
                  Sarah Johnson
                </option>

                <option value="Mike Wilson">
                  Mike Wilson
                </option>

                <option value="Emma Davis">
                  Emma Davis
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="cardio-form-group">
              <label htmlFor="message">
                <FaCommentAlt />
                Additional Message (Optional)
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your fitness goals or any specific requirements..."
                rows="4"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="cardio-confirm-button"
            >
              <FaCheckCircle />
              <span>Confirm Booking</span>
            </button>

          </form>
        </div>
      </div>

      {/* =====================================================
          RIGHT SIDE - INFORMATION
      ====================================================== */}

      <div className="cardio-booking-right">

        {/* PAGE HEADING */}
        <div className="cardio-booking-header">

          <div className="cardio-header-icon">
            <FaHeartbeat />
          </div>

          <h1>
            Book a <span>Cardio Training</span> Session
          </h1>

          <div className="cardio-header-decoration">
            <span></span>
            <FaHeartbeat />
            <span></span>
          </div>

          <p>
            Schedule your cardio training session with our certified trainers.
          </p>

        </div>

        {/* STRONG HEART CARD */}
        <section className="strong-heart-card">

          <div className="strong-heart-content">

            <h2>
              STRONG HEART.
              <br />
              <span>BETTER YOU.</span>
            </h2>

            <p>
              Our cardio training programs are designed to improve
              your heart health, boost endurance and help you live
              a healthier, more active life.
            </p>

          </div>

          <div className="strong-heart-stats">

            <div className="heart-stat">
              <FaHeartbeat />
              <span>Boost Heart</span>
              <span>Health</span>
            </div>

            <div className="heart-stat">
              <FaFire />
              <span>Burn</span>
              <span>Calories</span>
            </div>

            <div className="heart-stat">
              <FaLungs />
              <span>Improve</span>
              <span>Stamina</span>
            </div>

          </div>

        </section>

        {/* WHY CHOOSE */}
        <section className="why-card">

          <h2>
            Why Choose <span>Cardio Training?</span>
          </h2>

          <div className="why-grid">

            {benefits.map((benefit, index) => (
              <div className="why-item" key={index}>

                <div className="why-icon">
                  {benefit.icon}
                </div>

                <p>
                  {benefit.title}
                  <br />
                  {benefit.subtitle}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* WHAT TO EXPECT */}
        <section className="expect-card">

          <h2>What to Expect?</h2>

          <div className="expect-list">

            {expectations.map((item, index) => (
              <div className="expect-item" key={index}>
                <FaCheckCircle />
                <span>{item}</span>
              </div>
            ))}

          </div>

        </section>

        {/* HELP CARD */}
        <section className="help-card">

          <div className="help-content">

            <FaHeadphones className="help-icon" />

            <div>
              <h3>Need Help?</h3>
              <p>
                Our support team is here to help you.
              </p>
            </div>

          </div>

          <div className="help-divider"></div>

          <div className="call-content">

            <FaPhone />

            <div>
              <span>Call Us</span>
              <strong>+91 12345 67890</strong>
            </div>

          </div>

        </section>

      </div>
    </div>
  );
}

export default CardioTrainingBooking;