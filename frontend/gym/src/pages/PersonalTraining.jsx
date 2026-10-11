import React from "react";
import { Link } from "react-router-dom";
import "./PersonalTraining.css";

import mainImage from "../assets/images/services/personal-training-main.jpg";
import trainingImage from "../assets/images/services/personal-training.jpg";
import cardioImage from "../assets/images/services/personal-training-cardio.jpg";
import deadliftImage from "../assets/images/services/personal-training-deadlift.jpg";
import pushupsImage from "../assets/images/services/personal-training-pushups.jpg";

function PersonalTraining() {
  return (
    <div className="personal-training-page">

      {/* HERO SECTION */}
      <section className="pt-hero">
        <div className="pt-hero-content">
          <div className="pt-small-title">PERSONAL TRAINING</div>

          <h1>
            YOUR GOALS.
            <br />
            <span>OUR MISSION.</span>
          </h1>

          <p>
            Get personalized training programs designed around your body,
            fitness level and goals. Our certified trainers are here to help
            you become stronger, healthier and more confident.
          </p>

          <div className="pt-buttons">
            <Link to="/booking" className="pt-primary-btn">
              Book a Session
            </Link>

            <a href="#programs" className="pt-secondary-btn">
              Explore Programs
            </a>
          </div>
        </div>

        <div className="pt-hero-image">
          <img src={mainImage} alt="Personal Training" />
        </div>
      </section>

      {/* WHY PERSONAL TRAINING */}
      <section className="pt-intro">
        <div className="pt-section-heading">
          <span>WHY PERSONAL TRAINING?</span>
          <h2>TRAIN SMARTER. GET STRONGER.</h2>
          <p>
            One-on-one coaching gives you the attention, motivation and
            personalized guidance you need to reach your fitness goals.
          </p>
        </div>

        <div className="pt-features">
          <div className="pt-feature-card">
            <div className="pt-feature-icon">🏋️</div>
            <h3>Professional Trainers</h3>
            <p>
              Certified trainers create effective workouts based on your
              individual fitness level.
            </p>
          </div>

          <div className="pt-feature-card">
            <div className="pt-feature-icon">🎯</div>
            <h3>Personalized Plans</h3>
            <p>
              Every workout is designed around your goals, body and progress.
            </p>
          </div>

          <div className="pt-feature-card">
            <div className="pt-feature-icon">🔥</div>
            <h3>Constant Motivation</h3>
            <p>
              Stay motivated and accountable with a trainer supporting you
              every step of the way.
            </p>
          </div>

          <div className="pt-feature-card">
            <div className="pt-feature-icon">📈</div>
            <h3>Track Your Progress</h3>
            <p>
              Monitor your performance and continuously improve your strength
              and fitness.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="pt-programs" id="programs">
        <div className="pt-section-heading">
          <span>OUR PROGRAMS</span>
          <h2>BUILT AROUND YOU</h2>
          <p>
            Choose the training style that matches your fitness goals.
          </p>
        </div>

        <div className="pt-program-grid">

          <div className="pt-program-card">
            <img src={trainingImage} alt="Strength Training" />

            <div className="pt-program-content">
              <h3>Strength Training</h3>
              <p>
                Build strength, muscle and power with structured resistance
                training.
              </p>
            </div>
          </div>

          <div className="pt-program-card">
            <img src={cardioImage} alt="Cardio Training" />

            <div className="pt-program-content">
              <h3>Cardio Training</h3>
              <p>
                Improve endurance, stamina and overall cardiovascular fitness.
              </p>
            </div>
          </div>

          <div className="pt-program-card">
            <img src={deadliftImage} alt="Weight Training" />

            <div className="pt-program-content">
              <h3>Weight Training</h3>
              <p>
                Improve your lifting technique and develop total-body strength.
              </p>
            </div>
          </div>

          <div className="pt-program-card">
            <img src={pushupsImage} alt="Functional Training" />

            <div className="pt-program-content">
              <h3>Functional Training</h3>
              <p>
                Improve mobility, balance, coordination and everyday movement.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* TRAINING PROCESS */}
      <section className="pt-process">
        <div className="pt-process-image">
          <img src={trainingImage} alt="Personal trainer" />
        </div>

        <div className="pt-process-content">
          <span>OUR APPROACH</span>

          <h2>
            YOUR FITNESS.
            <br />
            <strong>YOUR JOURNEY.</strong>
          </h2>

          <div className="pt-step">
            <div className="pt-step-number">01</div>
            <div>
              <h3>Assess</h3>
              <p>
                We understand your current fitness level and goals.
              </p>
            </div>
          </div>

          <div className="pt-step">
            <div className="pt-step-number">02</div>
            <div>
              <h3>Plan</h3>
              <p>
                Your trainer creates a personalized workout program.
              </p>
            </div>
          </div>

          <div className="pt-step">
            <div className="pt-step-number">03</div>
            <div>
              <h3>Train</h3>
              <p>
                Train with proper technique and professional guidance.
              </p>
            </div>
          </div>

          <div className="pt-step">
            <div className="pt-step-number">04</div>
            <div>
              <h3>Progress</h3>
              <p>
                Track your results and keep improving every session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-cta">
        <div>
          <span>READY TO START?</span>

          <h2>
            LET'S BUILD
            <strong> A STRONGER YOU.</strong>
          </h2>

          <p>
            Take the first step towards your fitness goals today.
          </p>

          <Link to="/booking" className="pt-cta-btn">
            Book Your Session
          </Link>
        </div>
      </section>

    </div>
  );
}

export default PersonalTraining;