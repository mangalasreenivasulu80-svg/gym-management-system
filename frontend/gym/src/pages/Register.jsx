import React, { useState } from "react";
import "./Register.css";

import {
  FaDumbbell,
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaCalendarAlt,
  FaVenusMars,
  FaUserPlus,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.phone ||
      !formData.dateOfBirth ||
      !formData.gender
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      alert("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    console.log("Registration Data:", formData);

    alert("Account created successfully!");
  };

  return (
    <div className="register-page">

      {/* Dark background overlay */}
      <div className="register-overlay"></div>

      {/* Register Card */}
      <div className="register-card">

        {/* Logo */}
        <div className="register-logo">
          <FaDumbbell />
        </div>

        {/* Heading */}
        <h1>
          Create <span>Account</span>
        </h1>

        {/* Divider */}
        <div className="register-divider">
          <span></span>
          <FaDumbbell />
          <span></span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Row 1 */}
          <div className="register-row">

            {/* Full Name */}
            <div className="register-input-group">
              <FaUser className="register-input-icon" />

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="register-input-group">
              <FaEnvelope className="register-input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* Row 2 */}
          <div className="register-row">

            {/* Password */}
            <div className="register-input-group">
              <FaLock className="register-input-icon" />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Confirm Password */}
            <div className="register-input-group">
              <FaLock className="register-input-icon" />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* Phone */}
          <div className="register-input-group full-width">
            <FaPhone className="register-input-icon" />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Row 3 */}
          <div className="register-row">

            {/* Date of Birth */}
            <div className="register-input-group">
              <FaCalendarAlt className="register-input-icon" />

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            {/* Gender */}
            <div className="register-input-group">
              <FaVenusMars className="register-input-icon" />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

          </div>

          {/* Terms */}
          <div className="register-terms">

            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />

            <label htmlFor="terms">
              I agree to the{" "}
              <span>Terms &amp; Conditions</span>
              {" "}and{" "}
              <span>Privacy Policy</span>
            </label>

          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="create-account-btn"
          >
            <FaUserPlus />
            <span>Create Account</span>
          </button>

        </form>

        {/* OR */}
        <div className="register-or">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        {/* Social Buttons */}
        <div className="social-register">

          <button
            type="button"
            className="google-register"
            onClick={() => alert("Google registration clicked")}
          >
            <FaGoogle />
            <span>Register with Google</span>
          </button>

          <button
            type="button"
            className="facebook-register"
            onClick={() => alert("Facebook registration clicked")}
          >
            <FaFacebookF />
            <span>Register with Facebook</span>
          </button>

        </div>

        {/* Login */}
        <p className="already-account">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>

      </div>
    </div>
  );
}

export default Register;