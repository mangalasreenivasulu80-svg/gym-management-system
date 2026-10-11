import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeartbeat,
  FaCheckCircle,
  FaRunning,
  FaFire,
  FaDumbbell,
  FaArrowRight,
  FaClock,
  FaBolt,
} from "react-icons/fa";

import "./CardioTraining.css";

// Existing image from your services folder
import cardioTrainingImg from "../assets/images/services/cardio-training.jpg";

function CardioTraining() {
  const benefits = [
    "Improve Heart Health",
    "Burn Calories & Fat",
    "Increase Stamina & Endurance",
    "Improve Lung Capacity",
    "Boost Energy Levels",
    "Reduce Stress & Anxiety",
  ];

  const programs = [
    {
      icon: <FaRunning />,
      title: "Endurance Training",
      text: "Build stamina and improve your cardiovascular endurance through structured workouts.",
    },
    {
      icon: <FaFire />,
      title: "Fat Burning",
      text: "High-energy cardio sessions designed to burn calories and support healthy weight loss.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Heart Health",
      text: "Improve cardiovascular fitness and keep your heart strong with regular cardio workouts.",
    },
    {
      icon: <FaBolt />,
      title: "HIIT Training",
      text: "Short, intense workout intervals designed to improve fitness and maximize calorie burn.",
    },
  ];

  const workouts = [
    {
      icon: <FaRunning />,
      title: "Treadmill Running",
      text: "Improve running endurance, speed and cardiovascular fitness.",
    },
    {
      icon: <FaDumbbell />,
      title: "Cycling",
      text: "Low-impact cardio workout for stronger legs and better stamina.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Cross Trainer",
      text: "Full-body cardio workout that improves endurance and coordination.",
    },
    {
      icon: <FaFire />,
      title: "HIIT",
      text: "High-intensity intervals to burn calories and improve conditioning.",
    },
    {
      icon: <FaRunning />,
      title: "Stair Climbing",
      text: "Strengthen your legs while improving cardiovascular endurance.",
    },
    {
      icon: <FaBolt />,
      title: "Circuit Training",
      text: "Combine multiple exercises for a complete cardio and fitness workout.",
    },
  ];

  const workoutPlan = [
    [
      "Day 1",
      "Cardio Endurance",
      "Treadmill, Cycling, Cool Down",
      "3",
      "30-40 min",
    ],
    [
      "Day 2",
      "HIIT Training",
      "Running, Jumping Jacks, Burpees",
      "4",
      "20-30 min",
    ],
    [
      "Day 3",
      "Active Recovery",
      "Walking, Stretching, Light Cycling",
      "2",
      "20-30 min",
    ],
    [
      "Day 4",
      "Fat Burning",
      "Treadmill, Cross Trainer, Cycling",
      "3",
      "30-40 min",
    ],
    [
      "Day 5",
      "Full Cardio",
      "Running, Stair Climbing, HIIT",
      "4",
      "30-45 min",
    ],
    [
      "Day 6-7",
      "Rest / Recovery",
      "Stretching, Walking, Yoga",
      "-",
      "-",
    ],
  ];

  const tips = [
    "Warm up for 5-10 minutes before cardio",
    "Start slowly and increase intensity gradually",
    "Stay hydrated throughout your workout",
    "Maintain proper posture and breathing",
    "Give your body enough recovery time",
  ];

  return (
    <div className="cardio-page">

      {/* =========================================
          BREADCRUMB
      ========================================= */}
      <div className="cardio-breadcrumb">
        <Link to="/services">Services</Link>
        <span>›</span>
        <span>Cardio Training</span>
      </div>

      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="cardio-hero">

        {/* LEFT CONTENT */}
        <div className="cardio-hero-content">

          <h1>
            Cardio <span>Training</span>
          </h1>

          <div className="cardio-title-decoration">
            <span></span>
            <FaHeartbeat />
            <span></span>
          </div>

          <p>
            Boost your heart health, burn calories, and improve endurance
            with our effective cardio training programs. Perfect for weight
            loss, stamina building, and a healthier lifestyle.
          </p>

          <Link
            to="/cardio-training-booking"
            className="cardio-main-btn"
          >
            Book a Session Now
            <FaArrowRight />
          </Link>

        </div>

        {/* HERO IMAGE */}
        <div className="cardio-hero-image">
          <img
            src={cardioTrainingImg}
            alt="Cardio Training"
          />
        </div>

      </section>

      {/* =========================================
          BENEFITS
      ========================================= */}
      <section className="cardio-benefits-section">

        <div className="cardio-section-heading">
          <span></span>

          <h2>
            Why Choose <strong>Cardio Training?</strong>
          </h2>

          <span></span>
        </div>

        <div className="cardio-benefits-grid">

          {benefits.map((benefit, index) => (
            <div
              className="cardio-benefit-card"
              key={index}
            >
              <div className="cardio-benefit-icon">
                <FaCheckCircle />
              </div>

              <h3>{benefit}</h3>
            </div>
          ))}

        </div>

      </section>

      {/* =========================================
          PROGRAMS
      ========================================= */}
      <section className="cardio-program-section">

        <div className="cardio-section-heading">
          <span></span>

          <h2>
            Our <strong>Cardio Programs</strong>
          </h2>

          <span></span>
        </div>

        <p className="cardio-section-subtitle">
          Structured cardio programs designed for every fitness level.
        </p>

        <div className="cardio-program-grid">

          {programs.map((program, index) => (
            <div
              className="cardio-program-card"
              key={index}
            >

              <div className="cardio-program-icon">
                {program.icon}
              </div>

              <h3>{program.title}</h3>

              <p>{program.text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* =========================================
          POPULAR CARDIO WORKOUTS
      ========================================= */}
      <section className="cardio-workouts-section">

        <div className="cardio-section-heading">
          <span></span>

          <h2>
            Popular <strong>Cardio Workouts</strong>
          </h2>

          <span></span>
        </div>

        <p className="cardio-section-subtitle">
          Choose from a variety of cardio exercises to keep your workouts
          effective and enjoyable.
        </p>

        <div className="cardio-workout-grid">

          {workouts.map((workout, index) => (
            <div
              className="cardio-workout-card"
              key={index}
            >

              <div className="cardio-workout-icon">
                {workout.icon}
              </div>

              <h3>{workout.title}</h3>

              <p>{workout.text}</p>

              <div className="cardio-workout-link">
                Learn More
                <FaArrowRight />
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* =========================================
          WORKOUT PLAN + TIPS
      ========================================= */}
      <section className="cardio-bottom-section">

        {/* WORKOUT PLAN */}
        <div className="cardio-workout-plan">

          <h2>
            Sample <span>Cardio Plan</span>
            <small> (Beginner)</small>
          </h2>

          <div className="cardio-table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>Day</th>
                  <th>Workout Focus</th>
                  <th>Exercises</th>
                  <th>Sets</th>
                  <th>Duration</th>
                </tr>
              </thead>

              <tbody>

                {workoutPlan.map((row, index) => (
                  <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>{row[4]}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* TIPS */}
        <div className="cardio-tips-box">

          <h2>
            Cardio <span>Training Tips</span>
          </h2>

          <div className="cardio-tips-list">

            {tips.map((tip, index) => (
              <div
                className="cardio-tip-item"
                key={index}
              >
                <span>
                  <FaCheckCircle />
                </span>

                <p>{tip}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================
          CTA
      ========================================= */}
      <section className="cardio-cta">

        <div className="cardio-cta-icon">
          <FaHeartbeat />
        </div>

        <div className="cardio-cta-content">

          <h2>
            Ready to Improve Your{" "}
            <span>Cardio Fitness?</span>
          </h2>

          <p>
            Start your cardio training journey today and build a stronger,
            healthier and more energetic you with our expert trainers.
          </p>

        </div>

        <Link
          to="/cardio-training-booking"
          className="cardio-cta-button"
        >
          Book a Session
          <FaArrowRight />
        </Link>

      </section>

    </div>
  );
}

export default CardioTraining;