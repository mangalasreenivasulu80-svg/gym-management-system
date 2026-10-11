import React from "react";
import { Link } from "react-router-dom";
import "./WeightTraining.css";

// Hero image
import weightTrainingImg from "../assets/images/services/weight-training.jpg";

// Popular Exercise Images
import benchPressImg from "../assets/images/weight-training/bench-press.png";
import deadliftImg from "../assets/images/weight-training/deadlift.png";
import squatImg from "../assets/images/weight-training/squat.png";
import shoulderPressImg from "../assets/images/weight-training/shoulder-press.png";
import barbellRowImg from "../assets/images/weight-training/barbell-row.png";
import bicepCurlImg from "../assets/images/weight-training/bicep-curl.png";

function WeightTraining() {
  const benefits = [
    "Increase Muscle Strength",
    "Improve Body Composition",
    "Boost Metabolism",
    "Enhance Bone Density",
    "Reduce Stress & Anxiety",
    "Improve Posture & Balance",
  ];

  const programs = [
    {
      icon: "🏋️",
      title: "Strength Building",
      text: "Focus on compound lifts to build overall strength and muscle mass.",
    },
    {
      icon: "💪",
      title: "Muscle Gain",
      text: "Targeted workouts and progressive overload for muscle hypertrophy.",
    },
    {
      icon: "🔥",
      title: "Fat Loss",
      text: "High-intensity weight training to burn fat and define your physique.",
    },
    {
      icon: "🏃",
      title: "Functional Training",
      text: "Improve everyday movements, mobility, and overall performance.",
    },
  ];

  // Popular Exercises - each has its own image
 const exercises = [
  {
    name: "Bench Press",
    image: benchPressImg,
  },
  {
    name: "Deadlift",
    image: deadliftImg,
  },
  {
    name: "Squat",
    image: squatImg,
  },
  {
    name: "Shoulder Press",
    image: shoulderPressImg,
  },
  {
    name: "Barbell Row",
    image: barbellRowImg,
  },
  {
    name: "Bicep Curl",
    image: bicepCurlImg,
  },
];

  const workoutPlan = [
    [
      "Day 1",
      "Chest & Triceps",
      "Bench Press, Push Ups, Tricep Dips",
      "3-4",
      "8-12",
    ],
    [
      "Day 2",
      "Back & Biceps",
      "Deadlift, Pull Ups, Barbell Curl",
      "3-4",
      "8-12",
    ],
    [
      "Day 3",
      "Legs",
      "Squat, Leg Press, Lunges",
      "3-4",
      "10-15",
    ],
    [
      "Day 4",
      "Shoulders",
      "Shoulder Press, Lateral Raises",
      "3-4",
      "10-15",
    ],
    [
      "Day 5",
      "Full Body",
      "Compound Lifts, Core Workout",
      "3-4",
      "8-12",
    ],
    [
      "Day 6-7",
      "Rest / Recovery",
      "Stretching, Cardio, Yoga",
      "-",
      "-",
    ],
  ];

  const tips = [
    "Warm up before every workout",
    "Use proper form & technique",
    "Increase weight gradually",
    "Stay hydrated & eat protein-rich food",
    "Get enough rest & sleep",
  ];

  return (
    <div className="weight-page">

      {/* BREADCRUMB */}
      <div className="weight-breadcrumb">
        <Link to="/services">Services</Link>
        <span>›</span>
        <span>Weight Training</span>
      </div>

      {/* HERO SECTION */}
      <section className="weight-hero">

        <div className="weight-hero-text">
          <h1>
            Weight <span>Training</span>
          </h1>

          <div className="orange-line">
            <span>🏋️</span>
          </div>

          <p>
            Build strength, increase muscle mass, and boost your overall
            fitness with our expert-led weight training programs. Perfect
            for all fitness levels — from beginners to advanced athletes.
          </p>

          <Link
            to="/weight-training-booking"
            className="weight-main-btn"
          >
            Book a Session Now →
          </Link>
        </div>

        {/* HERO IMAGE */}
        <div className="weight-hero-image">
          <img
            src={weightTrainingImg}
            alt="Weight Training"
          />
        </div>

        {/* BENEFITS */}
        <div className="weight-benefits">
          <h2>
            <span>Benefits</span>
          </h2>

          {benefits.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <span>✓</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>

      </section>

      {/* PROGRAMS + EXERCISES */}
      <section className="weight-program-section">

        {/* PROGRAMS */}
        <div className="program-area">

          <h2>
            Our <span>Weight</span> Training Program
          </h2>

          <div className="program-grid">

            {programs.map((program, index) => (
              <div className="program-card" key={index}>

                <div className="program-icon">
                  {program.icon}
                </div>

                <h3>{program.title}</h3>

                <p>{program.text}</p>

              </div>
            ))}

          </div>

        </div>

        {/* POPULAR EXERCISES */}
        <div className="exercise-area">

          <h2>
            Popular <span>Exercises</span>
          </h2>

          <div className="exercise-grid">
                      {exercises.map((exercise, index) => (
                   <div className="exercise-card" key={index}>

                  <div className="exercise-image">
                  <img
                     src={exercise.image}
                      alt={exercise.name}
                  />
                 </div>

                <div className="exercise-name">
                   {exercise.name}
              </div>

           </div>
      ))}
     
          </div>

        </div>

      </section>

      {/* WORKOUT PLAN + TIPS */}
      <section className="weight-bottom-grid">

        {/* WORKOUT PLAN */}
        <div className="workout-box">

          <h2>
            Sample <span>Workout Plan</span>
            <small> (Beginner)</small>
          </h2>

          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>Day</th>
                  <th>Workout Focus</th>
                  <th>Exercises</th>
                  <th>Sets</th>
                  <th>Reps</th>
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

        {/* TRAINING TIPS */}
        <div className="tips-box">

          <h2>
            Training <span>Tips</span>
          </h2>

          <div className="tips-list">

            {tips.map((tip, index) => (
              <div className="tip-item" key={index}>
                <span>✓</span>
                <p>{tip}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BOOKING CTA */}
      <section className="weight-booking-cta">

        <div className="cta-content">

          <h2>
            Ready to Start Your{" "}
            <span>Transformation?</span>
          </h2>

          <p>
            Join our weight training program today and achieve your
            fitness goals with our expert trainers.
          </p>

          <Link
            to="/weight-training-booking"
            className="cta-button"
          >
            Book a Session Now →
          </Link>

        </div>

        <div className="cta-icon">
          🏋️
        </div>

      </section>

    </div>
  );
}

export default WeightTraining;