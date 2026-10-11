import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaLeaf,
  FaDumbbell,
  FaHeartbeat,
  FaUserFriends,
  FaSmile,
} from "react-icons/fa";

import "./YogaFitness.css";

// =====================================================
// HERO IMAGE
// Use the image you already have in Services section.
// =====================================================
import yogaFitnessImage from "../assets/images/services/yoga-fitness.jpg";

function YogaFitness() {
  // =====================================================
  // BENEFITS
  // =====================================================
  const benefits = [
    "Increase Flexibility",
    "Build Lean Muscle",
    "Improve Posture",
    "Reduce Stress",
    "Boost Energy",
    "Enhance Mental Clarity",
  ];

  // =====================================================
  // YOGA & FITNESS PROGRAMS
  // =====================================================
  const programs = [
    {
      icon: <FaLeaf />,
      title: "Mind & Body Balance",
      text: "Unite strength, flexibility and mental peace.",
    },
    {
      icon: <FaDumbbell />,
      title: "Functional Fitness",
      text: "Build strength and endurance for daily life.",
    },
    {
      icon: <FaLeaf />,
      title: "Stress Relief",
      text: "Calm the mind and reduce anxiety.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Overall Wellness",
      text: "Feel stronger, healthier and more energetic.",
    },
  ];

  // =====================================================
  // POPULAR YOGA POSES
  //
  // These are remote images so you don't need to create
  // mountain-pose.jpg / tree-pose.jpg etc. immediately.
  // =====================================================
  const yogaPoses = [
    {
      name: "Mountain Pose",
      sanskrit: "Tadasana",
      description: "Improves posture and balance.",
      image:
        "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Downward Dog",
      sanskrit: "Adho Mukha Svanasana",
      description: "Stretches the body and relieves stress.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Warrior Pose",
      sanskrit: "Virabhadrasana",
      description: "Builds strength and focus.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Tree Pose",
      sanskrit: "Vrikshasana",
      description: "Enhances stability and concentration.",
      image:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=900&q=90",
    },
  ];

  // =====================================================
  // SAMPLE WORKOUT PLAN
  // =====================================================
  const workoutPlan = [
    [
      "Day 1",
      "Full Body Yoga Flow",
      "30 min",
      "Low – Moderate",
    ],
    [
      "Day 2",
      "Strength & Core",
      "40 min",
      "Moderate",
    ],
    [
      "Day 3",
      "Flexibility & Mobility",
      "30 min",
      "Low",
    ],
    [
      "Day 4",
      "Yoga + Mindfulness",
      "40 min",
      "Low",
    ],
    [
      "Day 5",
      "Total Body Fitness",
      "45 min",
      "Moderate",
    ],
    [
      "Day 6",
      "Rest & Recovery",
      "-",
      "-",
    ],
  ];

  // =====================================================
  // TRAINING TIPS
  // =====================================================
  const tips = [
    "Practice yoga in an empty stomach",
    "Focus on breathing (inhale & exhale)",
    "Keep your form correct",
    "Stay consistent",
    "Listen to your body and avoid overtraining",
  ];

  return (
    <div className="yoga-page">

      {/* =================================================
          TOP / BREADCRUMB
      ================================================= */}
      <div className="yoga-breadcrumb">
        <Link to="/services">
          <FaArrowLeft />
          <span>Back to Services</span>
        </Link>

        <span className="breadcrumb-separator">›</span>

        <span>Yoga & Fitness</span>
      </div>

      {/* =================================================
          HERO SECTION
      ================================================= */}
      <section className="yoga-hero">

        {/* LEFT CONTENT */}
        <div className="yoga-hero-content">

          <div className="yoga-small-title">
            Services
            <span>›</span>
            Yoga & Fitness
          </div>

          <h1>
            Yoga & <span>Fitness</span>
          </h1>

          {/* DECORATION */}
          <div className="yoga-title-decoration">
            <span></span>
            <FaLeaf />
            <span></span>
          </div>

          <p>
            Build a stronger body, calm your mind and achieve total
            wellness with our yoga & fitness programs.
          </p>

          <Link
            to="/yoga-fitness-booking"
            className="yoga-book-btn"
          >
            Book a Session Now
            <span>→</span>
          </Link>

        </div>

        {/* HERO IMAGE */}
        <div className="yoga-hero-image">
          <img
            src={yogaFitnessImage}
            alt="Woman practicing yoga meditation"
          />
        </div>

        {/* BENEFITS */}
        <div className="yoga-benefits">

          <h2>Benefits</h2>

          {benefits.map((benefit, index) => (
            <div
              className="yoga-benefit-item"
              key={index}
            >
              <FaCheckCircle />
              <span>{benefit}</span>
            </div>
          ))}

        </div>

      </section>

      {/* =================================================
          PROGRAM + POPULAR POSES
      ================================================= */}
      <section className="yoga-middle-section">

        {/* PROGRAM */}
        <div className="yoga-program-box">

          <h2>
            Our <span>Yoga & Fitness</span> Program
          </h2>

          <div className="yoga-program-grid">

            {programs.map((program, index) => (
              <div
                className="yoga-program-card"
                key={index}
              >

                <div className="yoga-program-icon">
                  {program.icon}
                </div>

                <h3>{program.title}</h3>

                <p>{program.text}</p>

              </div>
            ))}

          </div>

        </div>

        {/* POPULAR POSES */}
        <div className="yoga-poses-box">

          <h2>
            Popular <span>Yoga Poses</span>
          </h2>

          <div className="yoga-poses-grid">

            {yogaPoses.map((pose, index) => (
              <div
                className="yoga-pose-card"
                key={index}
              >

                <div className="yoga-pose-image">
                  <img
                    src={pose.image}
                    alt={pose.name}
                    loading="lazy"
                  />
                </div>

                <h3>{pose.name}</h3>

                <div className="yoga-sanskrit">
                  ({pose.sanskrit})
                </div>

                <p>{pose.description}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          WORKOUT PLAN + TIPS
      ================================================= */}
      <section className="yoga-bottom-section">

        {/* WORKOUT PLAN */}
        <div className="yoga-workout-box">

          <h2>
            Sample <span>Yoga & Fitness Plan</span>
            <small> (Beginner)</small>
          </h2>

          <div className="yoga-table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>Day</th>
                  <th>Workout / Yoga Focus</th>
                  <th>Duration</th>
                  <th>Intensity</th>
                </tr>
              </thead>

              <tbody>

                {workoutPlan.map((row, index) => (
                  <tr key={index}>

                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* TIPS */}
        <div className="yoga-tips-box">

          <h2>
            Yoga & Fitness <span>Tips</span>
          </h2>

          <div className="yoga-tips-list">

            {tips.map((tip, index) => (
              <div
                className="yoga-tip-item"
                key={index}
              >
                <FaCheckCircle />
                <span>{tip}</span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          BOOKING CTA
      ================================================= */}
      <section className="yoga-cta">

        <div className="yoga-cta-icon">
          <FaLeaf />
        </div>

        <div className="yoga-cta-content">

          <h2>
            Ready to Begin Your{" "}
            <span>Wellness Journey?</span>
          </h2>

          <p>
            Join our Yoga & Fitness program and build a
            stronger body, calmer mind and healthier lifestyle.
          </p>

        </div>

        <Link
          to="/yoga-fitness-booking"
          className="yoga-cta-button"
        >
          Book a Session
          <span>→</span>
        </Link>

      </section>

    </div>
  );
}

export default YogaFitness;