import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WeightTrainingBooking.css";

import weightTrainingImg from "../assets/images/services/weight-training.jpg";

function WeightTrainingBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Weight Training",
    date: "",
    time: "",
    trainer: "Any Available Trainer",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Weight Training Session booked successfully!");

    console.log("Booking Data:", formData);
  };

  return (
    <div className="weight-booking-page">

      <div className="booking-container">

        {/* LEFT SIDE */}
        <div className="booking-left">

          <Link to="/weight-training" className="back-services">
            ← Back to Weight Training
          </Link>

          <form
            className="weight-booking-form"
            onSubmit={handleSubmit}
          >

            <h2>
              🏋️ <span>Weight Training</span> Booking Form
            </h2>

            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />

            <label>Training Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option>Weight Training</option>
              <option>Personal Training</option>
              <option>Cardio Training</option>
              <option>Yoga & Fitness</option>
            </select>

            <label>Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <label>Preferred Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select a time</option>
              <option>06:00 AM</option>
              <option>07:00 AM</option>
              <option>08:00 AM</option>
              <option>09:00 AM</option>
              <option>05:00 PM</option>
              <option>06:00 PM</option>
              <option>07:00 PM</option>
              <option>08:00 PM</option>
            </select>

            <label>Trainer Preference</label>
            <select
              name="trainer"
              value={formData.trainer}
              onChange={handleChange}
            >
              <option>Any Available Trainer</option>
              <option>Strength Coach</option>
              <option>Weight Training Coach</option>
              <option>Senior Fitness Trainer</option>
            </select>

            <label>Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your goals, experience level or any special requirements..."
              rows="5"
            />

            <button type="submit">
              ✓ Confirm Booking
            </button>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="booking-right">

          <div className="booking-title">
            <div>🏋️</div>

            <h1>
              Book a <span>Weight Training</span> Session
            </h1>

            <div className="booking-line">
              🏋️
            </div>

            <p>
              Schedule your weight training session with our certified
              strength coaches.
            </p>
          </div>

          <div className="booking-info-card">

            <div className="booking-image">
              <img
                src={weightTrainingImg}
                alt="Weight Training"
              />

              <div className="image-text">
                <strong>BUILD STRENGTH.</strong>
                <span>TRANSFORM YOURSELF.</span>

                <p>
                  Our weight training programs are designed to help
                  you build muscle, increase strength and achieve
                  your fitness goals.
                </p>
              </div>
            </div>

            <div className="why-section">

              <h2>
                Why Choose <span>Weight Training?</span>
              </h2>

              <div className="why-grid">

                <div>
                  <b>💪</b>
                  <p>Increase<br />Muscle Strength</p>
                </div>

                <div>
                  <b>🏋️</b>
                  <p>Improve Body<br />Composition</p>
                </div>

                <div>
                  <b>🔥</b>
                  <p>Boost<br />Metabolism</p>
                </div>

                <div>
                  <b>🦴</b>
                  <p>Stronger Bones<br />& Joints</p>
                </div>

                <div>
                  <b>🧠</b>
                  <p>Reduce Stress<br />& Improve Mood</p>
                </div>

              </div>
            </div>

            <div className="expect-section">

              <h2>What to Expect?</h2>

              <ul>
                <li>✓ Personalized workout plan based on your goals</li>
                <li>✓ Proper form guidance and technique correction</li>
                <li>✓ Progress tracking and regular assessments</li>
                <li>✓ Nutritional advice to support your fitness journey</li>
              </ul>

            </div>

            <div className="help-section">

              <div>
                <strong>🎧 Need Help?</strong>
                <p>Our support team is here to help you.</p>
              </div>

              <div className="call-us">
                📞
                <span>
                  Call Us<br />
                  <b>+91 12345 67890</b>
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default WeightTrainingBooking;